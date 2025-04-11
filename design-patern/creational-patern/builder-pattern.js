class Handphone {
    constructor(processor, RAM, screen, speaker) {
        this.processor = processor
        this.RAM = RAM
        this.screen = screen
        this.speaker = speaker
    }
}

class HandphoneBuilder {
    constructor(processor, RAM) {
        this.processor = processor
        this.RAM = RAM

        this.screen = 'OLED'
        this.speaker = 'Dolby'
    }

    setScreen(screen) {
        this.screen = screen
        return this
    }

    setSpeaker(speaker) {
        this.speaker = speaker
        return this
    }

    build() {
        return new Handphone(this.processor,this.RAM,this.screen,this.speaker)
    }
}

const hape = new HandphoneBuilder('Helio g1',8).build()
const hapee = new HandphoneBuilder('Helio g91',8).setScreen('AMOLED').build()

console.log(hape)
console.log(hapee)