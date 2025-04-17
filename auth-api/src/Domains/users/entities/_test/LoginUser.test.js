const LoginUser = require('../LoginUser')

describe('LoginUser entities', () => {
    it('should throw error when payload not contain needed property', () => {
        // Arrange
        const payload = {
            username: 'aulia'
        }

        // Action and Assert
        expect(() => new LoginUser(payload)).toThrow('LOGIN_USER.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            username: 'aulia',
            password: 123
        }

        // Action and Assert
        expect(() => new LoginUser(payload)).toThrow('LOGIN_USER.NOT_MEET_DATA_TYPE_SPECIFICATION')
    }) 

    it('should create LoginUser entity correctly', () => {
        const payload = {
            username: 'aulia',
            password: 'encrypted_password'
        }

        // Action
        const loginUser = new LoginUser(payload)

        // Assert
        expect(loginUser).toBeInstanceOf(LoginUser)
        expect(loginUser.username).toEqual(payload.username)
        expect(loginUser.password).toEqual(payload.password)
    })
})