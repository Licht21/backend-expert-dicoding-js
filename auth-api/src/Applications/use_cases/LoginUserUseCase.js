const LoginUser = require('../../Domains/users/entities/LoginUser')
const NewAuth = require('../../Domains/authentications/entities/NewAuth')

class LoginUserUseCase {
    constructor({userRepository, authenticationTokenManager, passwordHash, authenticationRepository}) {
        this._userRepository = userRepository
        this._authenticationTokenManager = authenticationTokenManager
        this._passwordHash = passwordHash
        this._authenticationRepository = authenticationRepository
    }

    async execute(useCasePayload) {
        const loginUser = new LoginUser(useCasePayload)
        const encryptedPassword = await this._userRepository.getPasswordByUsername(loginUser.username)
        await this._passwordHash.comparePassword(useCasePayload.password, encryptedPassword)
        const userId = await this._userRepository.getIdByUsername(useCasePayload.username)
        const accessToken = await this._authenticationTokenManager.createAccessToken({
            id: userId,
            username: useCasePayload.username
        })
        const refreshToken = await this._authenticationTokenManager.createRefreshToken({
            id: userId,
            username: useCasePayload.username
        })
        await this._authenticationRepository.addRefreshToken(refreshToken)
        
        return new NewAuth({accessToken,refreshToken})
    }
}

module.exports = LoginUserUseCase