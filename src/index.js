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
    '&':'&'
};

function decode(expr) {
  let arrOfarr=[]
    let arr=[]
    let j=0;
    let r=0;
    for(let i=10;i<expr.length+10;i+=10){
      let sliced =expr.slice(j,i);
       for(let k=2;k<sliced.length +1;k+=2){
         let twoNumber=sliced.slice(r,k)
         if(twoNumber==='10'){
            arr.push('.')
         }else if(twoNumber==='11'){
            arr.push('-')
         }
         r+=2
       }if(sliced==='**********'){
          arr.push('&')
        }
       k=2
       r=0
       arrOfarr.push(arr)
       arr=[]
      j+=10;
    }
   
    arrOfarr.map(index=>(arr.push(MORSE_TABLE[index.join("")])))
    return arr.join("").replace(/\&/g," ")
}

module.exports = {
    decode
}