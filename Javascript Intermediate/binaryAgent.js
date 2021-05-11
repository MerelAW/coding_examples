function binaryAgent(str) {
  let pieces = str.split(" ");
  let text = "";

  for (let p = 0; p < pieces.length; p++){
    let piece = pieces[p];
    let numbers = piece.split("");
    let code = 0;
    for (let n = 0; n < numbers.length; n++){
      code += parseInt(numbers[n]) * Math.pow(2, (piece.length-(n+1)));
    }
    let char = String.fromCharCode(code);
    text += char;
  }
  return text;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
