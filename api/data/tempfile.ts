export const INPUT_CLASS_JS = `
class Input {
    constructor() {
      this.outpoint = null;
      this.script = Buffer.alloc(0);
      this.sequence = 0xffffffff;
      this.value = 0;
      this.scriptcode = Buffer.alloc(0);
    }
  
    static from_output(txid, vout, value, scriptcode) {
      const self = new this();
      self.outpoint = new Outpoint(Buffer.from(txid.replace('0x', ''),  'hex').reverse(), vout);
      self.value = value;
      self.scriptcode = Buffer.from(scriptcode.replace('0x', ''), 'hex');
      return self;
    }
  
    serialize() {
      const buf = Buffer.alloc(32 + 4 + 1 + 4);
      this.outpoint.serialize().copy(buf, 0);
      buf.writeUInt8(this.script.length, 36);
      // Optional, since we know in SegWit it's always zero bytes.
      // Adding this back will offset all following byte length positions.
      // this.script.copy(buf, 37);
      buf.writeUInt32LE(this.sequence, 37);
      return buf;
    }
  }
`

export const INPUT_CLASS_PY = `
class Input:
    def __init__(self):
        self.outpoint = None
        self.script = b""
        self.sequence = 0xffffffff
        self.value = 0
        self.scriptcode = b""

    @classmethod
    def from_output(cls, txid, vout, value, scriptcode):
        self = cls()
        self.outpoint = Outpoint(bytes.fromhex(txid)[::-1], vout)
        self.value = value
        self.scriptcode = bytes.fromhex(scriptcode)
        return self

    def serialize(self):
        r = b""
        r += self.outpoint.serialize()
        r += pack("<B", len(self.script))
        # Optional, since we know in SegWit it's always zero bytes
        # r += self.script
        r += pack("<I", self.sequence)
        return r
`

export const OUTPUT_CLASS_JS = `const bech32 = require('@savingsatoshi/bech32js')
const assert = require('assert');

class Output {
    constructor() {
      this.value = 0;
      this.witness_version = 0;
      this.witness_data = Buffer.alloc(0);
    }
  
    static from_options(addr, value) {
      assert(Number.isInteger(value));
      const self = new this();
      const {version, program} = bech32.decode('bc', addr);
      self.witness_version = version;
      self.witness_data = Buffer.from(program);
      self.value = value;
      return self;
    }
  
    serialize() {
      const buf = Buffer.alloc(11);
      buf.writeBigInt64LE(BigInt(this.value), 0);
      buf.writeUInt8(this.witness_data.length + 2, 8);
      buf.writeUInt8(this.witness_version, 9);
      buf.writeUInt8(this.witness_data.length, 10);
      return Buffer.concat([buf, this.witness_data]);
    }
  }
`

export const OUTPUT_CLASS_PY = `import bech32py.bech32 as bech32
from struct import pack

class Output:
    def __init__(self):
        self.value = 0
        self.witness_version = 0
        self.witness_data = b""

    @classmethod
    def from_options(cls, addr, value):
        assert isinstance(value, int)
        self = cls()
        (ver, data) = bech32.decode("bc", addr)
        self.witness_version = ver
        self.witness_data = bytes(data)
        self.value = value
        return self

    def serialize(self):
        r = b""
        r += pack("<q", self.value)
        r += pack("<B", len(self.witness_data) + 2)
        r += pack("<B", self.witness_version)
        r += pack("<B", len(self.witness_data))
        r += self.witness_data
        return r
`

export const TRANSACTION_CLASS_JS = `const {randomBytes, Hash} = require('crypto');
const secp256k1 = require('@savingsatoshi/secp256k1js')


class Transaction {
    constructor() {
      this.version = 2;
      this.flags = Buffer.from('0001', 'hex');
      this.inputs = [];
      this.outputs = [];
      this.witnesses = [];
      this.locktime = 0;
    }
  
    serialize() {
      let buf = Buffer.alloc(4);
      buf.writeUInt32LE(this.version, 0);
  
      buf = Buffer.concat([buf, this.flags]);
      buf = Buffer.concat([buf, Buffer.from([this.inputs.length])]);
      for (const input of this.inputs)
        buf = Buffer.concat([buf, input.serialize()]);
      buf = Buffer.concat([buf, Buffer.from([this.outputs.length])]);
      for (const output of this.outputs)
        buf = Buffer.concat([buf, output.serialize()]);
      for (const witness of this.witnesses)
        buf = Buffer.concat([buf, witness.serialize()]);
      
      const locktime = Buffer.alloc(4);
      locktime.writeUInt32LE(this.locktime);
  
      return Buffer.concat([buf, locktime]);
    }
  
    digest(input_index) {
      const dsha256 = (data) => {
        return Hash('sha256').update(Hash('sha256').update(data).digest()).digest();
      };
  
      const sighash = 1;
  
      let buf = Buffer.alloc(4);
      buf.writeUInt32LE(this.version, 0);
  
      let outpoints = Buffer.alloc(this.inputs.length * 36);
      for (let i = 0; i < this.inputs.length; i++)
        this.inputs[i].outpoint.serialize().copy(outpoints, i * 36);
      buf = Buffer.concat([buf, dsha256(outpoints)]);
  
      const sequences = Buffer.alloc(4 * this.inputs.length);
      for (let i = 0; i < this.inputs.length; i++)
        sequences.writeUInt32LE(this.inputs[i].sequence, i * 4);
      buf = Buffer.concat([buf, dsha256(sequences)]);
  
      buf = Buffer.concat([buf, this.inputs[input_index].outpoint.serialize()]);
      buf = Buffer.concat([buf, this.inputs[input_index].scriptcode]);
  
      const val_and_seq = Buffer.alloc(12);
      val_and_seq.writeBigInt64LE(BigInt(this.inputs[input_index].value), 0);
      val_and_seq.writeUInt32LE(this.inputs[input_index].sequence, 8);
      buf = Buffer.concat([buf, val_and_seq]);
  
      let outputs = Buffer.alloc(0);
      for (const output of this.outputs)
        outputs = Buffer.concat([outputs, output.serialize()]);
      buf = Buffer.concat([buf, dsha256(outputs)]);
  
      const locktime_and_sighash = Buffer.alloc(8);
      locktime_and_sighash.writeUInt32LE(this.locktime, 0);
      locktime_and_sighash.writeUInt32LE(sighash, 4);
      buf = Buffer.concat([buf, locktime_and_sighash]);
  
      return dsha256(buf);
    }
  
    compute_input_signature(index, key) {
      assert(typeof key === 'bigint');
      assert(Number.isInteger(index));
      // Helper function:
      // Find modular multiplicative inverse using Extended Euclidean Algorithm
      function invert(value, modulus = secp256k1.ORDER) {
        let x0 = 0n;
        let x1 = 1n;
        let a = value;
        let m = modulus;
  
        while (a > 1n) {
          const q = a / m;
          let t = m;
          m = a % m;
          a = t;
          t = x0;
          x0 = x1 - q * x0;
          x1 = t;
        }
  
        if (x1 < 0n)
          x1 += modulus;
  
        return x1;
      }
      // k = random integer in [1, n-1]
      // R = G * k
      // r = x(R) mod n
      // s = (r * a + m) / k mod n
      // Extra Bitcoin rule from BIP 146
      // https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#user-content-LOW_S
      //   s = -s mod n, if s > n / 2
      // return (r, s)
      const msg = this.digest(index);
      const k = BigInt(\`0x\${randomBytes(32).toString('hex')}\`);
      // Extremeley unlikely to fail, this is lazy but ok
      assert(k < secp256k1.ORDER);
      const k_inverted = invert(k);
      const R = secp256k1.G.mul(k);
      const r = R.x.val % secp256k1.ORDER;
      let s = ((r * key) + BigInt(\`0x\${msg.toString('hex')}\`)) * k_inverted % secp256k1.ORDER;
  
      if (s > (secp256k1.ORDER / 2n))
        s = secp256k1.ORDER - s;
      return [r, s];
    }
  
    sign_input(index, priv, pub, sighash=1) {
      // Represent in DER format. The byte representations of r and s have
      // length rounded up (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
      // See BIP 66
      // https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
      const der_int = (n) => {
        const bit_length = n.toString(2).length;
        const byte_length = parseInt((bit_length + 8) / 8);
        const padded_hex = n.toString(16).padStart(byte_length * 2, '0');
        return Buffer.from(padded_hex, 'hex');
      };
      const encode_der = (r, s) => {
        const rb = der_int(r);
        const sb = der_int(s);
        let buf = Buffer.from([0x30, 4 + rb.length + sb.length, 2, rb.length]);
        buf = Buffer.concat([buf, rb]);
        buf = Buffer.concat([buf, Buffer.from([2, sb.length])]);
        buf = Buffer.concat([buf, sb]);
        return buf;
      };
      const [r, s] = this.compute_input_signature(index, priv);
      const der_sig = encode_der(r, s);
      const wit = new Witness();
      wit.push_item(Buffer.concat([der_sig, Buffer.from([sighash])]));
      wit.push_item(pub);
      this.witnesses.push(wit);
    }
  }

  class Outpoint {
    constructor(txid, index) {
      assert(Buffer.isBuffer(txid));
      assert(txid.length === 32);
      assert(Number.isInteger(index));
      this.txid = txid;
      this.index = index;
    }
  
    serialize() {
      const buf = Buffer.alloc(36);
      this.txid.copy(buf, 0);
      buf.writeUInt32LE(this.index, 32);
      return buf;
    }
  }
`

export const TRANSACTION_CLASS_PY = `from struct import pack
import hashlib
from random import randrange
import secp256k1py.secp256k1 as secp256k1

class Transaction:
    def __init__(self):
        self.version = 2
        self.flags = bytes.fromhex("0001")
        self.inputs = []
        self.outputs = []
        self.witnesses = []
        self.locktime = 0

    def serialize(self):
        r = b""
        r += pack("<I", self.version)
        r += self.flags
        r += pack("<B", len(self.inputs))
        for inp in self.inputs:
            r += inp.serialize()
        r += pack("<B", len(self.outputs))
        for out in self.outputs:
            r += out.serialize()
        for wit in self.witnesses:
            r += wit.serialize()
        r += pack("<I", self.locktime)
        return r

    def digest(self, input_index):
        def dsha256(data):
            return hashlib.new('sha256', hashlib.new('sha256', data).digest()).digest()

        sighash = 1

        s = b""
        s += pack("<I", self.version)

        outpoints = b""
        for inp in self.inputs:
            outpoints += inp.outpoint.serialize()
        s += dsha256(outpoints)

        sequences = b""
        for inp in self.inputs:
            sequences += pack("<I", inp.sequence)
        s += dsha256(sequences)

        s += self.inputs[input_index].outpoint.serialize()
        s += self.inputs[input_index].scriptcode
        s += pack("<q", self.inputs[input_index].value)
        s += pack("<I", self.inputs[input_index].sequence)

        outputs = b""
        for out in self.outputs:
            outputs += out.serialize()
        s += dsha256(outputs)

        s += pack("<I", self.locktime)
        s += pack("<I", sighash)
        return dsha256(s)

    def compute_input_signature(self, index, key):
        # k = random integer in [1, n-1]
        # R = G * k
        # r = x(R) mod n
        # s = (r * a + m) / k mod n
        # Extra Bitcoin rule from BIP 146
        # https://github.com/bitcoin/bips/blob/master/bip-0146.mediawiki#user-content-LOW_S
        #   s = -s mod n, if s > n / 2
        # return (r, s)
        assert isinstance(key, int)
        msg = self.digest(index)
        k = randrange(1, secp256k1.GE.ORDER)
        k_inverted = pow(k, -1, secp256k1.GE.ORDER)
        R = k * secp256k1.G
        r = int(R.x) % secp256k1.GE.ORDER
        s = ((r * key) + int.from_bytes(msg)) * k_inverted % secp256k1.GE.ORDER
        if s > secp256k1.GE.ORDER // 2:
            s = secp256k1.GE.ORDER - s
        return (r, s)

    def sign_input(self, index, priv, pub, sighash=1):
        def encode_der(r, s):
            # Represent in DER format. The byte representations of r and s have
            # length rounded up (255 bits becomes 32 bytes and 256 bits becomes 33 bytes).
            # See BIP 66
            # https://github.com/bitcoin/bips/blob/master/bip-0066.mediawiki
            rb = r.to_bytes((r.bit_length() + 8) // 8, 'big')
            sb = s.to_bytes((s.bit_length() + 8) // 8, 'big')
            return b'\x30' + bytes([4 + len(rb) + len(sb), 2, len(rb)]) + rb + bytes([2, len(sb)]) + sb
        (r, s) = self.compute_input_signature(index, priv)
        der_sig = encode_der(r, s)
        wit = Witness()
        wit.push_item(der_sig + bytes([sighash]))
        wit.push_item(pub)
        self.witnesses.append(wit)

class Outpoint:
    def __init__(self, txid, index):
        assert isinstance(txid, bytes)
        assert len(txid) == 32
        assert isinstance(index, int)
        self.txid = txid
        self.index = index

    def serialize(self):
        # https:#docs.python.org/3/library/struct.html#byte-order-size-and-alignment
        # Encode the index as little-endian unsigned integer
        r = b""
        r += self.txid
        r += pack("<I", self.index)
        return r
        `
export const WITNESS_JS = `
class Witness {
    constructor() {
      this.items = [];
    }
  
    push_item(data) {
      this.items.push(data);
    }
  
    serialize() {
      let buf = Buffer.from([this.items.length]);
      for (const item of this.items)
        buf = Buffer.concat([buf, Buffer.from([item.length]), item]);
      return buf;
    }
  }
`

export const WITNESS_PY = `
class Witness:
    def __init__(self):
        self.items = []

    def push_item(self, data):
        self.items.append(data)

    def serialize(self):
        r = b""
        r += pack("<B", len(self.items))
        for item in self.items:
            r += pack("<B", len(item))
            r += item
        return r
`
