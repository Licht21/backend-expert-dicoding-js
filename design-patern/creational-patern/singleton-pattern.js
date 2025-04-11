class Log {
    constructor() {
        if(typeof Log.INSTANCE === 'object') {
            return Log.INSTANCE
        }
        this.log = []
        
        Log.INSTANCE = this
    }

    setLog(log) {
        this.log.push(log)
    }

    views() {
        console.log(this)
        return this.log
    }
}

const loggerA = new Log('error')
const loggerB = new Log('error')

loggerA.setLog('a')
console.log(loggerA.views())
loggerB.setLog('B')
console.log(loggerB.views())