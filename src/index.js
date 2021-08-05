const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};


function decode(expr) {
    if (expr.length < 10) return 0;

    let = letters = [];
    let resultStr = [];

    for (let i = 0, letterLength = expr.length; i < letterLength; i += 10) {
        letters.push(expr.substring(i, i + 10));
    }

    letters.forEach(elem => {
        if (elem === '**********') {
            resultStr.push(' ');
        } else {
            let code = '';
            for (let i = 0; i < elem.length; i += 2) {
                if (`${elem[i]}${elem[i + 1]}` === '10') code += '.';
                if (`${elem[i]}${elem[i + 1]}` === '11') code += '-';
            }
            resultStr.push(MORSE_TABLE[code]);
        }
    });
    
    return resultStr.join('');

}

module.exports = {
    decode
}
