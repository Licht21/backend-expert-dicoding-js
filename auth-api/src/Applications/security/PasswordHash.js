class PasswordHash {
    async hash(password) {
        throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED')
    }

    async comparePassword(plainPassword, encryptedPassword) {
        throw new Error('PASSWORD_HASH.METHOD_NOT_IMPLEMENTED')
    }
}

module.exports = PasswordHash