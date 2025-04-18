/* instanbul ignore file */

const { createContainer } = require('instances-container')

// external agency
const { nanoid } = require('nanoid')
const bcrypt = require('bcrypt')
const pool = require('./database/postgres/pool')

// service
const UserRepositoryPostgres = require('./repositories/UserRepositoryPostgres')
const BcryptPasswordHash = require('./security/BcryptPasswordHash')
const PasswordHash = require('../Applications/security/PasswordHash')
const UserRepository = require('../Domains/users/UserRepository')

// use case
const AddUserUseCase = require('../Applications/use_cases/AddUserUseCase')

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
    }
])

module.exports = container