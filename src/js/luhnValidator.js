export default function luhnValidator(digits) {
  let sum = 0;
  // console.log('luhnValidator_digits.length', digits.length);
  if (digits.length < 12 || digits.length > 19) return null;
  for (let i = 0; i < digits.length; i += 1) {
    let cardNum = parseInt(digits[i], 10);

    if ((digits.length - i) % 2 === 0) {
      cardNum *= 2;

      if (cardNum > 9) {
        cardNum -= 9;
      }
    }

    sum += cardNum;
  }

  return (sum !== 0) && (sum % 10 === 0);
}
