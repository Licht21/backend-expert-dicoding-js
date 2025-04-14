const UserRepository = require('../UserRepository')

describe('UserRepository Interface', () => {
    it('should throw error when invoke abstract behavior', async () => {
        // Arrange
        const userRepository = new UserRepository()

        // Action and Assert
        expect(userRepository.addUser({})).rejects.toThrow('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED')
        expect(userRepository.verifyAvailableUsername({})).rejects.toThrow('USER_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    })
})