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
    const N = 10;
    let decodedSentence = [];
    let words = expr.split('*'.repeat(N)); 
    words.forEach(word => {
        let decodedWord = '';
        for (let i = 0; i < word.length; i += N) {
            let letter = word.substring(i, i + 10); 
            let decodedLetter = '';
            for (let j = 0; j < N; j+=2) {
                let code = letter.substring(j, j + 2); 
                switch (code) {
                    case '10': decodedLetter += '.'; break;
                    case '11': decodedLetter += '-'; break;
                }
            }
            decodedWord += MORSE_TABLE[decodedLetter];
        }
        decodedSentence.push(decodedWord);
    });
    return decodedSentence.join(' ');
}

module.exports = {
    decode
}