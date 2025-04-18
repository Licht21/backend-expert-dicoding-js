const LoginUserUseCase = require("../../../../Applications/use_cases/LoginUserUseCase")

class AuthenticationsHandler {
    constructor(container) {
        this._container = container
        
        this.postAuthenticationHandler = this.postAuthenticationHandler.bind(this)
    }

    async postAuthenticationHandler(request, h) {
        const loginUserUseCase = this._container.getInstance(LoginUserUseCase.name)
        const tokens = await loginUserUseCase.execute(request.payload)

        const response = h.response({
            status: 'success',
            data: {
                accessToken: tokens.accessToken,
                refreshToken: tokens.refreshToken
            }
        }).code(201)

        return response
    }
}

module.exports = AuthenticationsHandler