class Car {
    constructor(merk, color) {
        this.merk = merk
        this.color = color
        this.status = 'inactive'
    }

    start() {
        this.status = 'active'
        console.log(this)
    }
}

const xenia = new Car('avanza', 'red')
console.log(xenia.status)
xenia.start()
console.log(xenia.status)