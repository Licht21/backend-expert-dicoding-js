class RefreshAuthenticationUseCase {
    constructor({authenticationRepository, authenticationTokenManager}) {
        this._authenticationRepository = authenticationRepository
        this._authenticationTokenManager = authenticationTokenManager
    }

    async execute(useCasePayload) {
        this._verifyPayload(useCasePayload)

        await this._authenticationTokenManager.verifyRefreshToken(useCasePayload)
        await this._authenticationRepository.checkRefreshToken(useCasePayload)

        const { id, username } = await this._authenticationTokenManager.decodePayload(useCasePayload)

        return await this._authenticationTokenManager.createAccessToken({
            id,
            username
        })

    }

    _verifyPayload(payload) {
        if(!payload) {
            throw new Error('REFRESH_AUTHENTICATION.NOT_CONTAIN_NEEDED_PROPERTY')
        }

        if(typeof payload !== 'string') {
            throw new Error('REFRESH_AUTHENTICATION.NOT_MEET_DATA_TYPE_SPECIFICATION')
        }
    }
}

module.exports = RefreshAuthenticationUseCase