const MathBasic = {
    add: (...args) => {
        if (args.length !== 2){
            throw new Error('Hanya bisa menerima dua input')
        }

        const [a,b] = args

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error('Hanya bisa menerima input angka')
        }

        return a + b
    },
    subtract: (...args) => {
        if (args.length !== 2){
            throw new Error('Hanya bisa menerima dua input')
        }

        const [a,b] = args

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error('Hanya bisa menerima input angka')
        }

        return a - b
    },
    multiply: (...args) => {
        if (args.length !== 2){
            throw new Error('Hanya bisa menerima dua input')
        }

        const [a,b] = args

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error('Hanya bisa menerima input angka')
        }

        return a * b
    },
    divide: (...args) => {
        if (args.length !== 2){
            throw new Error('Hanya bisa menerima dua input')
        }

        const [a,b] = args

        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error('Hanya bisa menerima input angka')
        }

        return a / b
    }
}

module.exports = MathBasic  