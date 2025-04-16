const AddUserUseCase = require('../../../../Applications/use_cases/AddUserUseCase')
const ClientError = require('../../../../Commons/exceptions/ClientError')
const DomainErrorTranslator = require('../../../../Commons/exceptions/DomainErrorTransalator')

class UsersHandler {
    constructor(container) {
        this._container = container

        this.postUserHandler = this.postUserHandler.bind(this)
    }

    async postUserHandler(request, h) {
        try {
        const addUserUseCase = this._container.getInstance(AddUserUseCase.name)
        const addedUser = await addUserUseCase.execute(request.payload)

        const response = h.response({
            status: 'success',
            data: {
                addedUser
            }
        }).code(201)

        return response
        } catch (e) {
            const translatedError = DomainErrorTranslator.translate(e)

            if(translatedError instanceof ClientError) {
                const response = h.response({
                    status: 'fail',
                    message: translatedError.message
                }).code(translatedError.statusCode)
    
                return response
            }

            const response = h.response({
                status: 'error',
                message: 'terjadi kegagalan pada server kami'
            }).code(500)

            return response
        }
    }
}

module.exports = UsersHandler