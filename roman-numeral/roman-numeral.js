function convertToRoman(num) {
  let rom = "";
  let rom2 = '';
  let dignum = 1;
  while (num >= 1)
  {
    let digit = num % 10
    if (digit == 4 || digit == 9) {
      rom += convert(digit + 1, dignum);
      rom += convert(1, dignum);
    }
    else if (digit == 5) {
      rom += convert(digit, dignum)
    }
    else if (digit - 5 > 0) {
      for(let k = 0; k < digit - 5; k++)
        rom += convert(1, dignum)
      rom += convert(5, dignum)
    }
    else {
      for(let j = 0; j < digit; j++)
      {
        rom += convert(1, dignum);
      }
    }
    num = Math.floor(num / 10);
    dignum = dignum * 10;
}
  for(let i = rom.length - 1; i >= 0; i--) {
     rom2 += rom.charAt(i);
  }
  return rom2;
}

function convert(dig, place) {
  let returnChar = ''
  switch(dig * place) {
    case (1):
         returnChar = 'I';
         break;
      case (5):
         returnChar =  'V';
         break;
      case (10):
         returnChar =  'X';
         break;
      case (50):
         returnChar =  'L';
         break;
      case (100):
         returnChar =  'C';
         break;
      case (500):
         returnChar =  'D';
         break;
      case (1000):
         returnChar =  'M';
         break;
  }
  return returnChar;
}

console.log(convertToRoman(16));