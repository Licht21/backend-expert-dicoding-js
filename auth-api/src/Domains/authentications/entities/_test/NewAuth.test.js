const NewAuth = require('../NewAuth')

describe('NewAuth Entities', () => {
    it('should throw error when payload not contain needed property', () => {
        // Arrange
        const payload = {
            accessToken: 'abcabc'
        }

        // Action and Assert
        expect(() => new NewAuth(payload)).toThrow('NEW_AUTH.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload not meet data type specification', () => {
        // Arrange
        const payload = {
            accessToken: 'abcabc',
            refreshToken: 123
        }

        // Action and Assert
        expect(() => new NewAuth(payload)).toThrow('NEW_AUTH.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should create NewAuth entity correctly', () => {
        // Arrange
        const payload = {
            accessToken: 'abcabc',
            refreshToken: 'abcabc'
        }

        // Action
        const newAuth = new NewAuth(payload)

        // Assert
        expect(newAuth).toBeInstanceOf(NewAuth)
        expect(newAuth.accessToken).toEqual('abcabc')
        expect(newAuth.refreshToken).toEqual('abcabc')
    })
})