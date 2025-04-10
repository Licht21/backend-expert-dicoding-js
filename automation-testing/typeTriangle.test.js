const typeTriangle = require('./typeTriangle')

describe('Sebuah fungsi triangle', () => {
    it('harus mengembalikan segitiga sama sisi ketika semua nilai sisi sama', () => {
        expect(typeTriangle(4,4,4)).toEqual('Segitiga sama sisi')
        expect(typeTriangle(1,1,1)).toEqual('Segitiga sama sisi')
        expect(typeTriangle(8,8,8)).toEqual('Segitiga sama sisi')
    })

    it('harus mengembalikan segitiga sama kaki ketika ada niali yang sisinya sama',() => {
        expect(typeTriangle(1,1,3)).toEqual('Segitiga sama kaki')
        expect(typeTriangle(1,2,2)).toEqual('Segitiga sama kaki')
        expect(typeTriangle(1,3,3)).toEqual('Segitiga sama kaki')
    })

    it('harus mengembalikan segitiga sembarang ketika tidak ada nilai yang sama',() => {
        expect(typeTriangle(1,2,3)).toEqual('Segitiga sembarang')
        expect(typeTriangle(4,5,6)).toEqual('Segitiga sembarang')
        expect(typeTriangle(7,8,9)).toEqual('Segitiga sembarang')
    })
})