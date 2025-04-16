class AuthenticationRepository {
    async addRefreshToken(refreshToken) {
        throw new Error('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    }

    async verifyRefreshToken(refreshToken) {
        throw new Error('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    }

    async deleteRefreshToken(refreshToken) {
        throw new Error('AUTHENTICATION_REPOSITORY.METHOD_NOT_IMPLEMENTED')
    }
}

module.exports = AuthenticationRepository