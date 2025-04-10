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

    describe('A calculateTriaglePerimeter function', () => {
        it('should throw an error when not given 2 parameter', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter()).toThrow()
            expect(() => figureCalculator.calculateTrianglePerimeter(1)).toThrow()
            expect(() => figureCalculator.calculateTrianglePerimeter(1,2)).toThrow()
            expect(() => figureCalculator.calculateTrianglePerimeter(1,2,3,4)).toThrow()
        })

        it('should throw an error when given non-numbers parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTrianglePerimeter({}, [], 1)).toThrow()
            expect(() => figureCalculator.calculateTrianglePerimeter({}, "1", 2)).toThrow()
            expect(() => figureCalculator.calculateTrianglePerimeter([], 1, {})).toThrow()
        })

        it('should return exact values of perimeter of triangle', () => {
            // Arrange
            const sideA = 10
            const sideB = 20
            const base = 10
            const figureCalculator = new FigureCalculator(MathBasic)
            const spyAdd = jest.spyOn(MathBasic, 'add')

            // Action
            const result = figureCalculator.calculateTrianglePerimeter(sideA, sideB, base)

            // Assert
            expect(result).toEqual(40)
            expect(spyAdd).toHaveBeenCalledWith(sideA,sideB)
            expect(spyAdd).toHaveBeenCalledWith(30,base)
        })
    })

    describe('A calculateTriangleArea', () => {
        it('should throw an error when not given 2 parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTriangleArea()).toThrow()
            expect(() => figureCalculator.calculateTriangleArea(1)).toThrow()
            expect(() => figureCalculator.calculateTriangleArea(1,2,3)).toThrow()
        })

        it('should throw an error when given non-numbers parameters', () => {
            const figureCalculator = new FigureCalculator({})

            expect(() => figureCalculator.calculateTriangleArea({},1)).toThrow()
            expect(() => figureCalculator.calculateTriangleArea(1,'1')).toThrow()
            expect(() => figureCalculator.calculateTriangleArea(2,[])).toThrow()
        })

        it('should return exact values of area of triangle', () => {
            // Arrange
            const height = 10
            const base = 20
            const spyDivide = jest.spyOn(MathBasic,'divide')
            const spyMultiply = jest.spyOn(MathBasic,'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)

            // Action
            const result = figureCalculator.calculateTriangleArea(height, base)

            // Assert
            expect(result).toEqual(100)
            expect(spyDivide).toHaveBeenCalledWith(height * base,2)
            expect(spyMultiply).toHaveBeenCalledWith(height,base)
        })
    })
})