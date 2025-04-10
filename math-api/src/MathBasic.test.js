const MathBasic = require('./MathBasic')

describe('A MathBasic', () => {
    it('should contains add, subtract, multiply, and divide function', () => {
        expect(MathBasic).toHaveProperty('add')
        expect(MathBasic).toHaveProperty('subtract')
        expect(MathBasic).toHaveProperty('multiply')
        expect(MathBasic).toHaveProperty('divide')
        expect(MathBasic.add).toBeInstanceOf(Function)
        expect(MathBasic.subtract).toBeInstanceOf(Function)
        expect(MathBasic.multiply).toBeInstanceOf(Function)
        expect(MathBasic.divide).toBeInstanceOf(Function)
    })

    describe('A add function',() => {
        it('should throw error when not given 2 parameters',() => {
            expect(() => MathBasic.add()).toThrow()
            expect(() => MathBasic.add(1)).toThrow()
            expect(() => MathBasic.add(1,2,3)).toThrow()
            expect(() => MathBasic.add(1,2,3,4)).toThrow()
        })

        it('should throw error when given non-number parameters', () => {
            expect(() => MathBasic.add('1','2')).toThrow()
            expect(() => MathBasic.add(true,{})).toThrow()
            expect(() => MathBasic.add(null,false)).toThrow()
        })

        it('should return exact value of a + b',() => {
            expect(MathBasic.add(1,1)).toEqual(2)
            expect(MathBasic.add(3,1)).toEqual(4)
            expect(MathBasic.add(5,1)).toEqual(6)
        })
    })

    describe('A subtract function', () => {
        it('should throw error when not given 2 parameters',() => {
            expect(() => MathBasic.subtract()).toThrow()
            expect(() => MathBasic.subtract(1)).toThrow()
            expect(() => MathBasic.subtract(1,2,3)).toThrow()
            expect(() => MathBasic.subtract(1,2,3,4)).toThrow()
        })

        it('should throw error when given non-numbers parameters',() => {
            expect(() => MathBasic.subtract('1','2')).toThrow()
            expect(() => MathBasic.subtract('1',true)).toThrow()
            expect(() => MathBasic.subtract('1',2)).toThrow()
            expect(() => MathBasic.subtract('1',{})).toThrow()
        })

        it('should return exact value of subtraction',() => {
            expect(MathBasic.subtract(2,1)).toEqual(1)
            expect(MathBasic.subtract(4,1)).toEqual(3)
            expect(MathBasic.subtract(10,5)).toEqual(5)
            expect(MathBasic.subtract(20,10)).toEqual(10)
        })
    })

    describe('A multiply function',() => {
        it('should throw error when not given 2 parameters',() => {
            expect(() => MathBasic.multiply()).toThrow()
            expect(() => MathBasic.multiply(1)).toThrow()
            expect(() => MathBasic.multiply(1,2,3)).toThrow()
            expect(() => MathBasic.multiply(1,2,3,4)).toThrow()
        })

        it('should throw error when given non-numbers parameters',() => {
            expect(() => MathBasic.multiply('1','2')).toThrow()
            expect(() => MathBasic.multiply('1',true)).toThrow()
            expect(() => MathBasic.multiply('1',2)).toThrow()
            expect(() => MathBasic.multiply('1',{})).toThrow()
        })

        it('should return exact multiplying values',() => {
            expect(MathBasic.multiply(1,1)).toEqual(1)
            expect(MathBasic.multiply(2,2)).toEqual(4)
            expect(MathBasic.multiply(2,4)).toEqual(8)
            expect(MathBasic.multiply(1,10)).toEqual(10)
        })
    })

    describe('A divide function',() => {
        it('should throw error when not given 2 parameters',() => {
            expect(() => MathBasic.divide()).toThrow()
            expect(() => MathBasic.divide(1)).toThrow()
            expect(() => MathBasic.divide(1,2,3)).toThrow()
            expect(() => MathBasic.divide(1,2,3,4)).toThrow()
        })

        it('should throw error when given non-numbers parameters',() => {
            expect(() => MathBasic.divide('1','2')).toThrow()
            expect(() => MathBasic.divide('1',true)).toThrow()
            expect(() => MathBasic.divide('1',2)).toThrow()
            expect(() => MathBasic.divide('1',{})).toThrow()
        })

        it('should return exact dividing values',() => {
            expect(MathBasic.divide(10,2)).toEqual(5)
            expect(MathBasic.divide(20,2)).toEqual(10)
            expect(MathBasic.divide(100,5)).toEqual(20)
        })
    })
})