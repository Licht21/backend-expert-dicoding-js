const UserRepository = require('../../../Domains/users/UserRepository')
const PasswordHash = require('../../security/PasswordHash')
const AuthenticationTokenManager = require('../../security/AuthenticationTokenManager')
const AuthenticationRepository = require('../../../Domains/authentications/AuthenticationRepository')
const NewAuth = require('../../../Domains/authentications/entities/NewAuth')
const LoginUser = require('../../../Domains/users/entities/LoginUser')
const LoginUserUseCase = require('../LoginUserUseCase')

describe('LoginUserUseCase', () => {
    it('should orchestrating the login user action correctly', async () => {
        // Arrange
        const useCasePayload = {
            username: 'aulia',
            password: 'aulia'
        }
        const jwtToken = {
            accessToken: 'accessToken',
            refreshToken: 'refreshToken'
        }
        
        // creating dependency of use case
        const mockPasswordHash = new PasswordHash()
        const mockAuthenticationTokenManager = new AuthenticationTokenManager()
        const mockUserRepository = new UserRepository()
        const mockAuthenticationRepository = new AuthenticationRepository()

        // mocking needed function so the function don't throw error
        mockUserRepository.getPasswordByUsername = jest.fn()
            .mockImplementation(() => Promise.resolve('encrypted_password'))
        mockPasswordHash.comparePassword = jest.fn()
            .mockImplementation(() => Promise.resolve())
        mockUserRepository.getIdByUsername = jest.fn()
            .mockImplementation(() => Promise.resolve('1'))
        mockAuthenticationTokenManager.createAccessToken = jest.fn()
            .mockImplementation(() => Promise.resolve('accessToken'))
        mockAuthenticationTokenManager.createRefreshToken = jest.fn()
            .mockImplementation(() => Promise.resolve('refreshToken'))
        mockAuthenticationRepository.addRefreshToken = jest.fn()
            .mockImplementation(() => Promise.resolve())

        // creating use case instance
        const loginUserUseCase = new LoginUserUseCase({
            passwordHash: mockPasswordHash,
            authenticationTokenManager: mockAuthenticationTokenManager,
            userRepository: mockUserRepository,
            authenticationRepository: mockAuthenticationRepository
        })
        
        // Action
        const loginUser = await loginUserUseCase.execute(useCasePayload)

        // Assert
        expect(loginUser).toStrictEqual(new NewAuth({
            accessToken: jwtToken.accessToken,
            refreshToken: jwtToken.refreshToken
        }))
        expect(mockUserRepository.getPasswordByUsername).toHaveBeenCalledWith(useCasePayload.username)
        expect(mockPasswordHash.comparePassword).toHaveBeenCalledWith(useCasePayload.password,'encrypted_password')
        expect(mockUserRepository.getIdByUsername).toHaveBeenCalledWith(useCasePayload.username)
        expect(mockAuthenticationTokenManager.createAccessToken).toHaveBeenCalledWith({
            id: '1',
            username: useCasePayload.username
        })
        expect(mockAuthenticationTokenManager.createRefreshToken).toHaveBeenCalledWith({
            id: '1',
            username: useCasePayload.username
        })
        expect(mockAuthenticationRepository.addRefreshToken).toHaveBeenCalledWith(jwtToken.refreshToken)
    })
})
