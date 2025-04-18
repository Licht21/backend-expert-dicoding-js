const InvariantError = require("../../Commons/exceptions/InvariantError");
const AuthenticationRepository = require("../../Domains/authentications/AuthenticationRepository");

class AuthenticationRepositoryPostgres extends AuthenticationRepository {
    constructor(pool) {
        super()
        this._pool = pool
    }

    async addRefreshToken(refreshToken) {
        const query = {
            text: 'INSERT INTO authentications VALUES ($1)',
            values: [refreshToken]
        }

        await this._pool.query(query)
    }

    async checkRefreshToken(refreshToken) {
        const query = {
            text: 'SELECT token FROM authentications WHERE token = $1',
            values: [refreshToken]
        }

        const token = await this._pool.query(query)

        if(token.rows.length === 0 ) {
            throw new InvariantError('Refresh Token Tidak Ditemukan')
        }
    }

    async deleteRefreshToken(refreshToken) {
        const query = {
            text: 'DELETE FROM authentications WHERE token = $1',
            values: [refreshToken]
        }

        await this._pool.query(query)
    }
}

module.exports = AuthenticationRepositoryPostgres