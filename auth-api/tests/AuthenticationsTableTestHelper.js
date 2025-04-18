/* instanbul ignore file */

const pool = require('../src/Infrastructures/database/postgres/pool')

const AuthenticationsTableHelper = {
    async addRefreshToken(refreshToken) {
        const query = {
            text: 'INSERT INTO authentications VALUES ($1)',
            values: [refreshToken]
        }

        await pool.query(query)
    },

    async checkRefreshToken(refreshToken) {
        const query = {
            text: 'SELECT token FROM authentications WHERE token = $1',
            values: [refreshToken]
        }

        const result = await pool.query(query)

        return result.rows
    },

    async cleanTable() {
        await pool.query('TRUNCATE TABLE authentications')
    }
}

module.exports = AuthenticationsTableHelper