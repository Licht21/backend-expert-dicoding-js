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
    calculateTrianglePerimeter(){}
    calculateTriangleArea(){}
}

module.exports = FigureCalculator