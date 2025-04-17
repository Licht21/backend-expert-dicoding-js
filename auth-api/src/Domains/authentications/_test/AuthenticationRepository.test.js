const AuthenticationRepository = require('../AuthenticationRepository')

describe('AuthenticationRepository Interface', () => {
    it('should throw error when invoke abstract behavior', async () => {
        // Arrange
        const authenticationRepository = new AuthenticationRepository()

        expect(authenticationRepository.addRefreshToken('')).rejects.toThrow('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
        expect(authenticationRepository.checkRefreshToken('')).rejects.toThrow('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
        expect(authenticationRepository.deleteRefreshToken('')).rejects.toThrow('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    })
})