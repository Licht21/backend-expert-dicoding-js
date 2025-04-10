const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A FigureCalculator', () => {
    it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
        const figureCalculator = new FigureCalculator({});

        expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter')
        expect(figureCalculator).toHaveProperty('calculateRectangleArea')
        expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter')
        expect(figureCalculator).toHaveProperty('calculateTriangleArea')
        expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function)
        expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function)
        expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function)
        expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function)
    })

    describe('A calculateRectanglePerimeter function', () => {
        it('should throw an error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({})
            
            expect(() => figureCalculator.calculateRectanglePerimeter()).toThrow()
            expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrow()
            expect(() => figureCalculator.calculateRectanglePerimeter(1,2,3)).toThrow()
        })

        it('should throw an error when given non-numbers parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectanglePerimeter({},1)).toThrow()
            expect(() => figureCalculator.calculateRectanglePerimeter(1,'1')).toThrow()
            expect(() => figureCalculator.calculateRectanglePerimeter(true,1)).toThrow()
        })

        it('should return exact values of perimeter of rectangle', () => {
            // Arrange
            const length = 20
            const width = 10
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateRectanglePerimeter(length, width)

            // Assert
            expect(result).toEqual(60)
            expect(spyAdd).toHaveBeenCalledWith(length,width);
            expect(spyMultiply).toHaveBeenCalledWith(2,30)
        })
    })

    describe('A calculateRectangleArea function', () => {
        it('should throw an error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectangleArea()).toThrow()
            expect(() => figureCalculator.calculateRectangleArea(1)).toThrow()
            expect(() => figureCalculator.calculateRectangleArea(1,2,3)).toThrow()
        })

        it('should throw an error when given non-numbers parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateRectangleArea({},1)).toThrow()
            expect(() => figureCalculator.calculateRectangleArea({},{})).toThrow()
            expect(() => figureCalculator.calculateRectangleArea({},[])).toThrow()
        })

        it('should return exact values of area of rectangle', () => {
            // Arrange
            const length = 10
            const width = 20
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateRectangleArea(length, width)

            // Assert
            expect(result).toEqual(200)
            expect(spyMultiply).toHaveBeenCalledWith(length,width)
        })
    })
})