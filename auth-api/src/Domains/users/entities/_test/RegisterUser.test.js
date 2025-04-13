const RegisterUser = require('../RegisterUser')

describe('a RegisterUser entities', () => {
    it('should throw error when payload did not container needed property', () => {
        // Arrange
        const payload = {
            username: 'abc',
            password: 'abc'
        }

        // Action & Assert
        expect(() => new RegisterUser(payload)).toThrow('REGISTER_USER.NOT_CONTAIN_NEEDED_PROPERTY')
    })

    it('should throw error when payload did not meet data type specificatoin', () => {
        // Arrange
        const payload = {
            username: 123,
            fullname: 'abc',
            password: true,
        }

        // Action and Assert
        expect(() => new RegisterUser(payload)).toThrow('REGISTER_USER.NOT_MEET_DATA_TYPE_SPECIFICATION')
    })

    it('should throw error when username contains more than 50 character', () => {
        // Arrange
        const payload = {
            username: 'asasasasasasasasasasasasasasasasasasasasasasasassasaasasas',
            fullname: 'abc',
            password: 'abc'
        }

        // Actions and Assert
        expect(() => new RegisterUser(payload)).toThrow('REGISTER_USER.USERNAME_LIMIT_CHAR')
    })

    it('should throw error when username contains restricted character', () => {
        // Arrange
        const payload = {
            username: 'dico ding',
            fullname: 'dicoding',
            password: 'abc'
        }

        // Actions and Assert
        expect(() => new RegisterUser(payload)).toThrow('REGISTER_USER.USERNAME_CONTAIN_RESTRICTED_CHARACTER')
    })

    it('should create registerUser object correctly', () => {
        // Arrange
        const payload = {
            username: 'dicoding',
            password: 'dicoding',
            fullname: 'dicoding'
        }

        // Actions
        const { username, password, fullname } = new RegisterUser(payload)

        // Assert
        expect(username).toEqual(payload.username)
        expect(password).toEqual(payload.password)
        expect(fullname).toEqual(payload.fullname)
    })
})