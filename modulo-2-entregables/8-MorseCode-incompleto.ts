class Transmitter {
    private text: string;
    private bulb: string[];

    constructor(text: string){
        this.text = text;
    }

    transmit() {
        this.decrypt();
        this.writer();
    }

    private decryptLetter(letter:string) : string {
        return letter !== " " ? morseAlphabet[letter] : " ";
      }

    private decrypt() {
        this.text = this.text.split("").map(this.decryptLetter).join("");
      }

    private writer(){
        console.log(this.text); // Para ver el morse generado
        // Para cada carácter en morse generado, lightBulb debería proporcionar el timeout en el que mostrar o 0 o 1
        this.text.split("").map(this.lightBulb).join("");
    }

    private lightBulb(letter:string) {
        return setInterval(
            function() { 
                console.log(letter === "." ? 1 : 0)
            },
            timing[letter]);
    } 
}

const text:string = 'Prueba de mensaje a morsificar';
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
    ".": 1000,
    "-": 1000*3,
    " ": 1000*7
  }

 function transmitMessage(text: string){
    return new Transmitter(text);
}
console.log(text);
const morsify = transmitMessage(text).transmit();
