export const secp256k1py = `_A=None
import json
class FE:
	SIZE=2**256-2**32-977
	def __init__(C,a=0,b=1):
		if isinstance(a,FE):B=a._num;A=a._den
		else:B=a%FE.SIZE;A=1
		if isinstance(b,FE):A=A*b._num%FE.SIZE;B=B*b._den%FE.SIZE
		else:A=A*b%FE.SIZE
		if B==0:A=1
		C._num=B;C._den=A
	def __add__(A,a):
		if isinstance(a,FE):return FE(A._num*a._den+A._den*a._num,A._den*a._den)
		return FE(A._num+A._den*a,A._den)
	def __radd__(A,a):return FE(a)+A
	def __sub__(A,a):
		if isinstance(a,FE):return FE(A._num*a._den-A._den*a._num,A._den*a._den)
		return FE(A._num-A._den*a,A._den)
	def __rsub__(A,a):return FE(a)-A
	def __mul__(A,a):
		if isinstance(a,FE):return FE(A._num*a._num,A._den*a._den)
		return FE(A._num*a,A._den)
	def __rmul__(A,a):return FE(a)*A
	def __truediv__(A,a):return FE(A,a)
	def __pow__(A,a):return FE(pow(A._num,a,FE.SIZE),pow(A._den,a,FE.SIZE))
	def __neg__(A):return FE(-A._num,A._den)
	def __int__(A):
		if A._den!=1:A._num=A._num*pow(A._den,-1,FE.SIZE)%FE.SIZE;A._den=1
		return A._num
	def sqrt(C):
		A=int(C);B=pow(A,(FE.SIZE+1)//4,FE.SIZE)
		if B**2%FE.SIZE==A:return FE(B)
	def is_square(A):return A.sqrt()is not _A
	def is_even(A):return int(A)&1==0
	def __eq__(A,a):
		if isinstance(a,FE):return(A._num*a._den-A._den*a._num)%FE.SIZE==0
		return(A._num-A._den*a)%FE.SIZE==0
	def to_bytes(A):return int(A).to_bytes(32,'big')
	@staticmethod
	def from_bytes(b):
		A=int.from_bytes(b,'big')
		if A>=FE.SIZE:return
		return FE(A)
	def __str__(A):return f"{int(A):064x}"
	def __repr__(A):return f"FE(0x{int(A):x})"
class GE:
	ORDER=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141;ORDER_HALF=ORDER//2
	def __init__(A,x=_A,y=_A):
		if x is _A:A.infinity=True
		else:B=FE(x);C=FE(y);A.infinity=False;A.x=B;A.y=C
	def __add__(A,a):
		if A.infinity:return a
		if a.infinity:return A
		if A.x==a.x:
			if A.y!=a.y:return GE()
			else:B=3*A.x**2/(2*A.y)
		else:B=(A.y-a.y)/(A.x-a.x)
		C=B**2-(A.x+a.x);D=B*(A.x-C)-A.y;return GE(C,D)
	@staticmethod
	def mul(*B):
		C=[(A%GE.ORDER,B)for(A,B)in B];A=GE()
		for D in range(255,-1,-1):
			A=A+A
			for(E,F)in C:
				if E>>D&1:A+=F
		return A
	def __rmul__(A,a):
		if A==G:return SECP256K1.FAST_G.mul(a)
		return GE.mul((a,A))
	def __neg__(A):
		if A.infinity:return A
		return GE(A.x,-A.y)
	def to_bytes_compressed(A):return bytes([3-A.y.is_even()])+A.x.to_bytes()
	def to_bytes_uncompressed(A):return b'\x04'+A.x.to_bytes()+A.y.to_bytes()
	def to_bytes_xonly(A):return A.x.to_bytes()
	@staticmethod
	def lift_x(x):
		A=(FE(x)**3+7).sqrt()
		if A is _A:return
		if not A.is_even():A=-A
		return GE(x,A)
	@staticmethod
	def from_bytes(b):
		if len(b)==33:
			if b[0]!=2 and b[0]!=3:return
			A=FE.from_bytes(b[1:])
			if A is _A:return
			B=GE.lift_x(A)
			if B is _A:return
			if b[0]==3:B=-B
			return B
		else:
			if b[0]!=4:return
			A=FE.from_bytes(b[1:33]);C=FE.from_bytes(b[33:])
			if C**2!=A**3+7:return
			return GE(A,C)
	@staticmethod
	def from_bytes_xonly(b):
		A=FE.from_bytes(b)
		if A is _A:return
		return GE.lift_x(A)
	@staticmethod
	def is_valid_x(x):return(FE(x)**3+7).is_square()
	def __str__(A):
		if A.infinity:return'(inf)'
		return f"({A.x},{A.y})"
	def __repr__(A):
		if A.infinity:return'GE()'
		return f"GE(0x{int(A.x):x},0x{int(A.y):x})"
G=GE.lift_x(0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798)
class FastGEMul:
	def __init__(A,p):
		A.table=[p]
		for B in range(255):p=p+p;A.table.append(p)
	def mul(C,a):
		A=GE();a=a%GE.ORDER
		for B in range(a.bit_length()):
			if a&1<<B:A+=C.table[B]
		D={'x':hex(int(A.x)),'y':hex(int(A.y))if not A.infinity else _A};E=json.dumps(D);return E
class SECP256K1:
	class FAST_G:
		def __init__(A):0
SECP256K1.FAST_G=FastGEMul(G)


`
