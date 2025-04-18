const Hapi = require('@hapi/hapi')
const config = require('../../Commons/config')
const DomainErrorTranslator = require('../../Commons/exceptions/DomainErrorTransalator')
const ClientError = require('../../Commons/exceptions/ClientError')
const users = require('../../Interfaces/http/api/users')
const authentications = require('../../Interfaces/http/api/authentications')

const createServer = async (container) => {
    const server = Hapi.server({
        host: config.app.host,
        port: config.app.port,
        debug: config.app.debug,
    })

    await server.register([
        {
            plugin: users,
            options: {container}
        },
        {
            plugin: authentications,
            options: {container}
        }
    ])

    server.ext('onPreResponse', (request, h) => {
        const { response } = request

        if (response instanceof Error) {
            const translatedError = DomainErrorTranslator.translate(response)

            if (translatedError instanceof ClientError) {
                const newResponse = h.response({
                    status: 'fail',
                    message: translatedError.message
                }).code(translatedError.statusCode)
                return newResponse
            }

            // mempertahankan penanganan client error oleh hapi secara native, seperti 404, etc.
            if (!translatedError.isServer) {
                return h.continue;
            }

            // penanganan server error sesuai kebutuhan
            const newResponse = h.response({
                status: 'error',
                message: 'terjadi kegagalan pada server kami',
            });
            newResponse.code(500);
            return newResponse;
        }

        return h.continue
    })

    return server
}

module.exports = createServer