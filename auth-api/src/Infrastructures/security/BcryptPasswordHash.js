const PasswordHash = require('../../Applications/security/PasswordHash')
const AuthenticationError = require('../../Commons/exceptions/AuthenticationError')

class BcryptPasswordHash extends PasswordHash {
    constructor(bcrypt, saltRound = 10) {
        super()
        this._saltRound = saltRound
        this._bcrypt = bcrypt
    }

    async hash(password) {
        return this._bcrypt.hash(password,this._saltRound)
    }

    async comparePassword(plainPassword, encryptedPassword) {
        const result = await this._bcrypt.compare(plainPassword,encryptedPassword)

        if(!result) {
            throw new AuthenticationError('kredensial yang anda masukkan salah')
        }
    }
}

module.exports = BcryptPasswordHash