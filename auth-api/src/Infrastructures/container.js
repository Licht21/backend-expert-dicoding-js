/* instanbul ignore file */

const { createContainer } = require('instances-container')

// external agency
const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const pool = require('./database/postgres/pool')
const Jwt = require('@hapi/jwt')

// service
const UserRepository = require('../Domains/users/UserRepository')
const UserRepositoryPostgres = require('./repositories/UserRepositoryPostgres')
const PasswordHash = require('../Applications/security/PasswordHash')
const BcryptPasswordHash = require('./security/BcryptPasswordHash')
const AuthenticationTokenManager = require('../Applications/security/AuthenticationTokenManager')
const JwtTokenManager = require('./security/JwtTokenManager')
const AuthenticationRepository = require('../Domains/authentications/AuthenticationRepository')
const AuthenticationRepositoryPostgres = require('./repositories/AuthenticationRepositoryPostgres')

// use case
const AddUserUseCase = require('../Applications/use_cases/AddUserUseCase')
const LoginUserUseCase = require('../Applications/use_cases/LoginUserUseCase')

// creating container
const container = createContainer()

// registering services and repository
container.register([
    {
        key: UserRepository.name,
        Class: UserRepositoryPostgres,
        parameter:{
            dependencies: [
                {
                    concrete: pool,
                },
                {
                    concrete: nanoid
                }
            ]
        }
    },
    {
        key: PasswordHash.name,
        Class: BcryptPasswordHash,
        parameter: {
            dependencies: [
                {
                    concrete: bcrypt
                }
            ]
        }
    },
    {
        key: AuthenticationTokenManager.name,
        Class: JwtTokenManager,
        parameter: {
            dependencies: [
                {
                    concrete: Jwt.token
                }
            ]
        }
    },
    {
        key: AuthenticationRepository.name,
        Class: AuthenticationRepositoryPostgres,
        parameter: {
            dependencies: [
                {
                    concrete: pool
                }
            ]
        }
    }
])

// registering use cases
container.register([
    {
        key: AddUserUseCase.name,
        Class: AddUserUseCase,
        parameter: {
            injectType: 'destructuring',
            dependencies: [
                {
                    name: 'userRepository',
                    internal: UserRepository.name
                },
                {
                    name: 'passwordHash',
                    internal: PasswordHash.name
                }
            ]
        }
    },
    {
        key: LoginUserUseCase.name,
        Class: LoginUserUseCase,
        parameter: {
            injectType: 'destructuring',
            dependencies: [
                {
                    name: 'userRepository',
                    internal: UserRepository.name
                },
                {
                    name: 'authenticationTokenManager',
                    internal: AuthenticationTokenManager.name
                },
                {
                    name: 'passwordHash',
                    internal: PasswordHash.name
                },
                {
                    name: 'authenticationRepository',
                    internal: AuthenticationRepository.name
                }
            ]
        }
    }
])

module.exports = container