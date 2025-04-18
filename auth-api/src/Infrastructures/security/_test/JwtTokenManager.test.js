const Jwt = require('@hapi/jwt')
const JwtTokenManager = require('../JwtTokenManager')

describe('JwtTokenManager', () => {
    describe('createAccessToken function', () => {
        it('should create accessToken correctly', async () => {
            // Arrange
            const payload = {
                id: '1',
                username: 'aulia'
            }
            const mockJwtToken = {
                generate: jest.fn().mockImplementation(() => 'mock_token')
            }
            const jwtTokenManager = new JwtTokenManager(mockJwtToken)

            // Action
            const accessToken = await jwtTokenManager.createAccessToken(payload, process.env.ACCESS_TOKEN_KEY)

            // Assert
            expect(accessToken).toEqual('mock_token')
            expect(mockJwtToken.generate).toHaveBeenCalledWith(payload, process.env.ACCESS_TOKEN_KEY)
        })
    })

    describe('createRefreshToken function', () => {
        it('should create refresh token correctly', async () => {
            // Arrange
            const payload = {
                id: '1',
                username: 'aulia'
            }
            const mockJwtToken = {
                generate: jest.fn().mockImplementation(() => 'mock_token')
            }
            const jwtTokenManager = new JwtTokenManager(mockJwtToken)

            // Action
            const refreshToken = await jwtTokenManager.createRefreshToken(payload)

            // Assert
            expect(refreshToken).toEqual('mock_token')
            expect(mockJwtToken.generate).toHaveBeenCalledWith(payload, process.env.REFRESH_TOKEN_KEY)
        })
    })
})