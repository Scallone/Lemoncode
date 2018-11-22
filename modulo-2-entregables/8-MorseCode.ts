class Transmitter {
    private text: string;
    private delay: number = 0;

    constructor(text: string) {
        this.text = text.toLowerCase(); // Esto es por si acaso alguien probaba con mayúsculas
    }

    public transmit() {
        this.decrypt();
        this.writer();
    }

    private decryptLetter(letter: string): string {
        // Pequeño parseo para identificar los cambios de símbolo con "/" que se van a usar luego (ver objeto timing)
        return letter !== " " ? morseAlphabet[letter].split("").join("/") : " ";
    }

    private decrypt() {
        // Generamos el morse y identificamos los cambios de letra con un "+", que se va a usar luego (ver objeto timing)
        this.text = this.text.split("").map(this.decryptLetter).join("+");
    }

    private getDelay(symbol: string): number {
        // Dado un t inicial, cada vez que se llame se le sumará el delay asociado a un símbolo
        return this.delay = this.delay + timing[symbol].delay;
    }
    private writer() {
        this.text.split("")
            .forEach(
                (symbol: string) =>
                    setTimeout(() => console.log(timing[symbol].state),
                        this.getDelay(symbol))
            );
    }

}

const text: string = 'sos';
const morseAlphabet = {
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
}

const timing = {
    ".": {
        "delay": 1000,
        "state": "ON"
    },
    "+": { // Auxiliar: lo usamos para identificar cambio de letra
        "delay": 1000 * 3,
        "state": "OFF"
    },
    "-": {
        "delay": 1000 * 3,
        "state": "ON"
    },
    " ": { // El cambio de palabra
        "delay": 1000 * 7,
        "state": "OFF"
    },
    "/": { // Auxiliar: lo usamos para identificar un cambio de símbol (.- , .. , -. , --)
        "delay": 1000,
        "state": "OFF"
    }
}

function transmitMessage(text: string) {
    return new Transmitter(text);
}

console.log(text);

const morsify = transmitMessage(text).transmit();
