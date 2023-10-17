export const secp256k1py = `"""Test-only implementation of low-level secp256k1 field and group arithmetic

It is designed for ease of understanding, not performance.

WARNING: This code is slow and trivially vulnerable to side channel attacks. Do not use for
anything but tests.

Exports:
* FE: class for secp256k1 field elements
* GE: class for secp256k1 group elements
* G: the secp256k1 generator point
"""
import json
class FE:
    SIZE = 2**256 - 2**32 - 977
    def __init__(self, a=0, b=1):
        if isinstance(a, FE):
            num = a._num
            den = a._den
        else:
            num = a % FE.SIZE
            den = 1
        if isinstance(b, FE):
            den = (den * b._num) % FE.SIZE
            num = (num * b._den) % FE.SIZE
        else:
            den = (den * b) % FE.SIZE
        assert den != 0
        if num == 0:
            den = 1
        self._num = num
        self._den = den
    def __add__(self, a):
        if isinstance(a, FE):
            return FE(self._num * a._den + self._den * a._num, self._den * a._den)
        return FE(self._num + self._den * a, self._den)
    def __radd__(self, a):
        return FE(a) + self
    def __sub__(self, a):
        if isinstance(a, FE):
            return FE(self._num * a._den - self._den * a._num, self._den * a._den)
        return FE(self._num - self._den * a, self._den)
    def __rsub__(self, a):
        return FE(a) - self
    def __mul__(self, a):
        if isinstance(a, FE):
            return FE(self._num * a._num, self._den * a._den)
        return FE(self._num * a, self._den)
    def __rmul__(self, a):
        return FE(a) * self
    def __truediv__(self, a):
        return FE(self, a)
    def __pow__(self, a):
        return FE(pow(self._num, a, FE.SIZE), pow(self._den, a, FE.SIZE))
    def __neg__(self):
        return FE(-self._num, self._den)
    def __int__(self):
        if self._den != 1:
            self._num = (self._num * pow(self._den, -1, FE.SIZE)) % FE.SIZE
            self._den = 1
        return self._num
    def sqrt(self):
        v = int(self)
        s = pow(v, (FE.SIZE + 1) // 4, FE.SIZE)
        if s**2 % FE.SIZE == v:
            return FE(s)
        return None
    def is_square(self):
        return self.sqrt() is not None
    def is_even(self):
        return int(self) & 1 == 0
    def __eq__(self, a):
        if isinstance(a, FE):
            return (self._num * a._den - self._den * a._num) % FE.SIZE == 0
        return (self._num - self._den * a) % FE.SIZE == 0
    def to_bytes(self):
        return int(self).to_bytes(32, 'big')
    @staticmethod
    def from_bytes(b):
        v = int.from_bytes(b, 'big')
        if v >= FE.SIZE:
            return None
        return FE(v)
    def __str__(self):
        return f"{int(self):064x}"
    def __repr__(self):
        return f"FE(0x{int(self):x})"
class GE:
    ORDER = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
    ORDER_HALF = ORDER // 2
    def __init__(self, x=None, y=None):
        if x is None:
            assert y is None
            self.infinity = True
        else:
            fx = FE(x)
            fy = FE(y)
            assert fy**2 == fx**3 + 7
            self.infinity = False
            self.x = fx
            self.y = fy
    def __add__(self, a):
        if self.infinity:
            return a
        if a.infinity:
            return self
        if self.x == a.x:
            if self.y != a.y:
                assert self.y + a.y == 0
                return GE()
            else:
                lam = (3 * self.x**2) / (2 * self.y)
        else:
            lam = (self.y - a.y) / (self.x - a.x)
        x = lam**2 - (self.x + a.x)
        y = lam * (self.x - x) - self.y
        return GE(x, y)
    @staticmethod
    def mul(*aps):
        naps = [(a % GE.ORDER, p) for a, p in aps]
        r = GE()
        for i in range(255, -1, -1):
            r = r + r
            for (a, p) in naps:
                if (a >> i) & 1:
                    r += p
        return r
    def __rmul__(self, a):
        if self == G:
            return FAST_G.mul(a)
        return GE.mul((a, self))
    def __neg__(self):
        if self.infinity:
            return self
        return GE(self.x, -self.y)
    def to_bytes_compressed(self):
        assert not self.infinity
        return bytes([3 - self.y.is_even()]) + self.x.to_bytes()
    def to_bytes_uncompressed(self):
        assert not self.infinity
        return b'\x04' + self.x.to_bytes() + self.y.to_bytes()
    def to_bytes_xonly(self):
        assert not self.infinity
        return self.x.to_bytes()
    @staticmethod
    def lift_x(x):
        y = (FE(x)**3 + 7).sqrt()
        if y is None:
            return None
        if not y.is_even():
            y = -y
        return GE(x, y)
    @staticmethod
    def from_bytes(b):
        assert len(b) in (33, 65)
        if len(b) == 33:
            if b[0] != 2 and b[0] != 3:
                return None
            x = FE.from_bytes(b[1:])
            if x is None:
                return None
            r = GE.lift_x(x)
            if r is None:
                return None
            if b[0] == 3:
                r = -r
            return r
        else:
            if b[0] != 4:
                return None
            x = FE.from_bytes(b[1:33])
            y = FE.from_bytes(b[33:])
            if y**2 != x**3 + 7:
                return None
            return GE(x, y)
    @staticmethod
    def from_bytes_xonly(b):
        assert len(b) == 32
        x = FE.from_bytes(b)
        if x is None:
            return None
        return GE.lift_x(x)
    @staticmethod
    def is_valid_x(x):
        return (FE(x)**3 + 7).is_square()
    def __str__(self):
        if self.infinity:
            return "(inf)"
        return f"({self.x},{self.y})"
    def __repr__(self):
        if self.infinity:
            return "GE()"
        return f"GE(0x{int(self.x):x},0x{int(self.y):x})"
G = GE.lift_x(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798)
class FastGEMul:
    def __init__(self, p):
        self.table = [p]
        for _ in range(255):
            p = p + p
            self.table.append(p)

    def mul(self, a):
        result = GE()
        a = a % GE.ORDER
        for bit in range(a.bit_length()):
            if a & (1 << bit):
                result += self.table[bit]

        # Convert the result to a Python dictionary
        result_dict = {
            "x": int(result.x),
            "y": int(result.y) if not result.infinity else None,
        }

        # Convert the Python dictionary to a JSON string
        result_json = json.dumps(result_dict)

        return result_json
class SECP256K1:
    class FAST_G:
       def __init__(self):
        pass
SECP256K1.FAST_G = FastGEMul(G)`
