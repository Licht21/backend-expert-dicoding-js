const AuthenticationsTableHelper = require('../../../../tests/AuthenticationsTableTestHelper')
const pool = require('../../database/postgres/pool')
const AuthenticationRepositoryPostgres = require('../AuthenticationRepositoryPostgres')
const InvariantError = require('../../../Commons/exceptions/InvariantError')

describe('AuthenticationRepositoryPostgres', () => {
    afterEach( async () => {
        await AuthenticationsTableHelper.cleanTable()
    })

    afterAll( async () => {
        await pool.end()
    })

    describe('addRefreshToken function', () => {
        it('should persist refresh token', async () => {
            // Arrange
            const refreshToken = 'abcabc'
            const authenticationRepositoryPostgres = new AuthenticationRepositoryPostgres(pool)

            // Action
            await authenticationRepositoryPostgres.addRefreshToken(refreshToken)

            const tokens = await AuthenticationsTableHelper.checkRefreshToken(refreshToken)

            // Assert
            expect(tokens).toHaveLength(1)
            expect(tokens[0].token).toEqual('abcabc')
        })
    })

    describe('checkRefreshToken function', () => {
        it('should throw Invariant Error when token not find on database', async () => {
            // Arrange
            const authenticationRepositoryPostgres = new AuthenticationRepositoryPostgres(pool)
            const refreshToken = 'abcabc'

            // Action and Assert
            await expect(authenticationRepositoryPostgres.checkRefreshToken(refreshToken)).rejects.toThrow(InvariantError)
        })

        it('should success to find token and not throw Invariant Error', async () => {
            // Arrange
            const authenticationRepositoryPostgres = new AuthenticationRepositoryPostgres(pool)
            const refreshToken = 'abcabc'
            await AuthenticationsTableHelper.addRefreshToken(refreshToken)

            // Action and Assert
            await expect(authenticationRepositoryPostgres.checkRefreshToken(refreshToken)).resolves.not.toThrow(InvariantError)
        })
    })

    describe('deleteRefreshToken function', () => {
        it('should delete token match in database', async () => {
            // Action
            const authenticationRepositoryPostgres = new AuthenticationRepositoryPostgres(pool)
            const refreshToken = 'abcabc'
            await AuthenticationsTableHelper.addRefreshToken(refreshToken)

            // Action
            await authenticationRepositoryPostgres.deleteRefreshToken(refreshToken)

            // Assert
            const tokens = await AuthenticationsTableHelper.checkRefreshToken(refreshToken)
            expect(tokens).toHaveLength(0)
        })
    })
})