const createServer = require('./createServer')
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
})