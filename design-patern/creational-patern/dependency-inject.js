class Engine {
    constructor(cc) {
        this.cc = cc
    }

    speed() {
        return this.cc
    }
}

class Car {
    constructor(engine) {
        this.engine = engine
    }

    ccCheck() {
        return this.engine.speed()
    }
}

const engine = new Engine(100)
const xenia = new Car(engine)

console.log(xenia.ccCheck())