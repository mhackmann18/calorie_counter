export function validateInput(input){
  const invalidChars = [
    "-",
    "+",
    "e",
    "E"
  ];
  if( invalidChars.includes(input) ){ return false; }
  else if( input < 0 || input > 100 ){ return false; }
  else { return true; }
}

export function roundTo(num, point) {
    if(num % 1 === 0){
      return num;
    } else {
      if(num.toFixed(point) % 1 === 0){
        return Math.floor(num.toFixed(point));
      } else {
        return num.toFixed(point);
      }
    }
}