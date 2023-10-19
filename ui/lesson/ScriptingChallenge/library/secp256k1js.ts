export const secp256k1js = `
const {inspect: inspect}=require("util"),
FIELD_SIZE=2n**256n-2n**32n-977n,
ORDER=0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141n,
ORDER_HALF=ORDER/2n;
class FE {
    constructor(n) {
        "BigInt" !=typeof n&&(n=BigInt(n)),
        this.val=(n%FIELD_SIZE+FIELD_SIZE)%FIELD_SIZE
    }
    add(n) {
        return new FE(this.val+(n.val||n))
    }
    mul(n) {
        return new FE(this.val*(n.val||n))
    }
    sub(n) {
        return new FE(this.val-(n.val||n))
    }
    div(n) {
        return n.val||(n=new FE(n)),
        this.mul(n.inv())
    }
    pow(n) {
        n.val&&(n=n.val);
        let t=1n,
        s=this.val%FIELD_SIZE;
        for(;
        n>0n;
        )n%2n===1n&&(t=t*s%FIELD_SIZE),
        n>>=1n,
        s=s*s%FIELD_SIZE;
        return new FE(t)
    }
    inv() {
        let n=0n,
        t=1n,
        s=this.val,
        e=FIELD_SIZE;
        for(;
        s>1n;
        ) {
            const i=s/e;
            let r=e;
            e=s%e,
            s=r,
            r=n,
            n=t-i*n,
            t=r
        }
        return t<0n&&(t+=FIELD_SIZE),
        new FE(t)
    }
    sqrt() {
        const n=this.pow((FIELD_SIZE+1n)/4n);
        return n.pow(2n).val===this.val?n: null
    }
    equals(n) {
        return this.val===n.val
    }
    neg() {
        return new FE(-this.val)
    }
    isEven() {
        return !(1n&this.val)
    }
    hex() {
        return this.val.toString(16).padStart(64, "0")
    }
    getBytes() {
        return Buffer.from(this.hex(), "hex")
    }
    [inspect.custom]() {
        return\`<FE: \$ {
            this.hex()
        }
        >\`
    }}
class GE {
    constructor(n, t) {
        if(this.inf= !0, this.x=null, this.y=null, n&&t) {
            if( !t.pow(2n).equals(n.pow(3n).add(7n)))throw new Error("Point is not on curve.");
            this.inf= !1,
            this.x=n,
            this.y=t
        }
    }
    add(n) {
        if(this.inf)return n;
        if(n.inf)return this;
        let t;
        if(this.x.equals(n.x)) {
            if( !this.y.equals(n.y)) {
                if( !this.y.add(n.y).equals(0n))throw new Error("One point is not on curve.");
                return new GE
            }
            t=this.x.pow(2n).mul(3n).div(this.y.mul(2n))
        }
        else t=this.y.sub(n.y).div(this.x.sub(n.x));
        const s=t.pow(2n).sub(this.x.add(n.x)),
        e=t.mul(this.x.sub(s)).sub(this.y);
        return new GE(s, e)
    }
    mul(n) {
        n%=ORDER;
        let t=new GE;
        for(let s=255n;
        s>=0n;
        s--)t=t.add(t),
        n>>s&1n&&(t=t.add(this));
        return t
    }
    static liftX(n) {
        let t=n.pow(3n).add(7n).sqrt();
        return t?(t.isEven()||(t=t.neg()), new GE(n, t)): null
    }
    [inspect.custom]() {
        const n= {
            x: "0x"+this.x.hex(), y:"0x"+this.y.hex()
        };
        return JSON.stringify(n)
    }}
const secp256k1= {
    FIELD_SIZE: FIELD_SIZE, FE:FE, GE:GE, G:GE.liftX(new FE(0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798n))
};
`
