class FigureCalculator {
    constructor(mathBasic){
        this._mathBasic = mathBasic
    }

    calculateRectanglePerimeter(...args){
        if(args.length !== 2) {
            throw new Error('Should Give 2 Parameters')
        }
        
        const [length,width] = args

        if(typeof length !== 'number' || typeof width !== 'number'){
            throw new Error('Parameters should be numbers')
        }

        return this._mathBasic.multiply(2, this._mathBasic.add(length,width))
    }

    calculateRectangleArea(...args){
        if(args.length !== 2) {
            throw new Error('Should Give 2 Parameters')
        }

        const [length, width] = args

        if(typeof length !== 'number' || typeof width !== 'number') {
            throw new Error('Parameters should be numbers')
        }

        return this._mathBasic.multiply(length,width)
    }

    calculateTrianglePerimeter(...args){
        if (args.length !== 3) {
            throw new Error('Should given 3 parameters')
        }

        const [sideA, sideB, base] = args

        if (typeof sideA !== 'number' || typeof sideB !== 'number' || typeof base !== 'number') {
            throw new Error('Parameters should be numbers')
        }

        return this._mathBasic.add(this._mathBasic.add(sideA,sideB), base)
    }

    calculateTriangleArea(...args){
        if (args.length !== 2) {
            throw new Error('Should given 2 parameters')
        }

        const [height, base] = args

        if (typeof height !== 'number' || typeof base !== 'number') {
            throw new Error('Parameters should be numbers')
        }

        return this._mathBasic.divide(this._mathBasic.multiply(height,base), 2)
    }
}

module.exports = FigureCalculator