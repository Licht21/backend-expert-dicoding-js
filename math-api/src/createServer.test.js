const createServer = require('./createServer')
const FigureCalculator = require('./FigureCalculator')
const MathBasic = require('./MathBasic')

describe('A HTTP Server', () => {
    describe('when GET /add', () => {
        it('should respond with a status code of 200 and the payload value is addition result of a and b correctly', async () => {
            // Arrange
            const a = 10
            const b = 20
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const server = createServer({mathBasic: MathBasic})

            // Action
            const response = await server.inject({
                method:'GET',
                url:`/add/${a}/${b}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(30)
            expect(spyAdd).toHaveBeenCalledWith(a,b)
        })
    })

    describe('when GET subtract', () => {
        it('should respond with a status code of 200 and the payload valueis subtraction result', async () => {
            // Arrange
            const a = 10
            const b = 5
            const spySubtraction = jest.spyOn(MathBasic, 'subtract')
            const server = createServer({mathBasic: MathBasic})

            // Actions
            const response = await server.inject({
                method: 'GET',
                url: `/subtract/${a}/${b}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(5)
            expect(spySubtraction).toHaveBeenCalledWith(a, b)
        })
    })

    describe('when GET multiply', () => {
        it('should respond with a status code of 200 and the payload values multiplying result', async () => {
            // Arrange
            const a = 10
            const b = 10
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const server = createServer({mathBasic: MathBasic})

            // Actions
            const response = await server.inject({
                method: 'GET',
                url:`/multiply/${a}/${b}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(100)
            expect(spyMultiply).toHaveBeenCalledWith(a, b)
        })
    })

    describe('when GET divide', () => {
        it('should respond with a status of 200 and the payload values dividing result', async () => {
            // Arrange
            const a = 10
            const b = 2
            const spyDivide = jest.spyOn(MathBasic, 'divide')
            const server = createServer({mathBasic: MathBasic})

            // Actions
            const response = await server.inject({
                method: 'GET',
                url: `/divide/${a}/${b}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(5)
            expect(spyDivide).toHaveBeenCalledWith(a,b)
        })
    })

    describe('when GET rectangle perimeter', () => {
        it('should response with a status of 200 and the payload values rectangle perimeter', async () => {
            // Arrange
            const length = 4
            const width = 2
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)
            const server = createServer({figureCalculator})

            // Actions
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/perimeter/${length}/${width}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(12)
            expect(spyAdd).toHaveBeenCalledWith(length, width)
            expect(spyMultiply).toHaveBeenCalledWith(2,length + width)
        })
    })

    describe('when GET rectangle area', () => {
        it('should respond with a status of 200 and the payload values rectangle area', async () => {
            // Arrange
            const length = 10
            const width = 8
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const figureCalculator = new FigureCalculator(MathBasic)
            const server = createServer({figureCalculator})

            // Actions
            const response = await server.inject({
                method: 'GET',
                url: `/rectangle/area/${length}/${width}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(80)
            expect(spyMultiply).toHaveBeenCalledWith(length, width)
        })
    })

    describe('when GET triangle perimeter', () => {
        it('should respond with a status 200 and the payload values trianle perimeter', async () => {
            // Arrange
            const sideA = 10
            const sideB = 10
            const base = 10
            const spyAdd = jest.spyOn(MathBasic, 'add')
            const figureCalculator = new FigureCalculator(MathBasic)
            const server = createServer({figureCalculator})

            // Actions
            const response = await server.inject({
                method: 'GET',
                url: `/triangle/perimeter/${sideA}/${sideB}/${base}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(sideA + sideB + base)
            expect(spyAdd).toHaveBeenCalledWith(10,10)
            expect(spyAdd).toHaveBeenCalledWith(20,10)
        })
    })

    describe('when GET triangle area', () => {
        it('should respond with a status 200 and the payload values triangle area', async () => {
            // Arrange
            const height = 10
            const base = 10
            const spyMultiply = jest.spyOn(MathBasic, 'multiply')
            const spyDivide = jest.spyOn(MathBasic, 'divide')
            const figureCalculator = new FigureCalculator(MathBasic)
            const server = createServer({figureCalculator})

            // Actions
            const response = await server.inject({
                method:'GET',
                url: `/triangle/area/${height}/${base}`
            })

            // Assert
            const responseJson = JSON.parse(response.payload)
            expect(response.statusCode).toEqual(200)
            expect(responseJson.value).toEqual(50)
            expect(spyMultiply).toHaveBeenCalledWith(height, base)
            expect(spyDivide).toHaveBeenCalledWith(height * base,2)
        })
    })
})