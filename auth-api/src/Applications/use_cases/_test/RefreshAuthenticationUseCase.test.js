const RefreshAuthenticationUseCase = require('../RefreshAuthenticationUseCase')
const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository')
const AuthenticationTokenManager = require('../../security/AuthenticationTokenManager')

describe('RefreshAuthenticationUseCase', () => {
    it('should orchestrating refresh authentication action correctly', async () => {
        // Arrange
        const useCasePayload = {
            refreshToken: 'abcabc'
        }
        const mockNewAccessToken = {
            accessToken: 'abcabc'
        }

        // Creating dependency of use case
        const mockAuthenticationRepository = new AuthenticationRepository()
        const mockAuthenticationTokenManager = new AuthenticationTokenManager()
        
        // mocking needed function so the function don't throw error
        mockAuthenticationTokenManager.verifyRefreshToken = jest.fn()
            .mockImplementation(() => Promise.resolve())
        mockAuthenticationRepository.checkRefreshToken = jest.fn()
            .mockImplementation(() => Promise.resolve())
        mockAuthenticationTokenManager.decodePayload = jest.fn()
            .mockImplementation(() => Promise.resolve({
                id:'1',
                username: 'abc'
            }))
        mockAuthenticationTokenManager.createAccessToken = jest.fn()
            .mockImplementation(() => Promise.resolve(mockNewAccessToken.accessToken))

        // creating use case instance
        const refreshAuthenticationUseCase = new RefreshAuthenticationUseCase({
            authenticationRepository: mockAuthenticationRepository,
            authenticationTokenManager: mockAuthenticationTokenManager
        })

        // Action
        const refreshAuthentication = await refreshAuthenticationUseCase.execute(useCasePayload.refreshToken)

        // Assert
        expect(refreshAuthentication).toEqual(mockNewAccessToken.accessToken)
        expect(mockAuthenticationTokenManager.verifyRefreshToken).toHaveBeenCalledWith(useCasePayload.refreshToken)
        expect(mockAuthenticationRepository.checkRefreshToken).toHaveBeenCalledWith(useCasePayload.refreshToken)
        expect(mockAuthenticationTokenManager.decodePayload).toHaveBeenCalledWith(useCasePayload.refreshToken)
        expect(mockAuthenticationTokenManager.createAccessToken).toHaveBeenCalledWith({
            id:'1',
            username: 'abc'
        })

    })
})