export default function cardSystemIdentifier(digits) {
  if (digits.length < 12 || digits.length > 19) return null;

  if (digits.startsWith('2')) {
    return '.mir';
  }

  if ([
    '30',
    '36',
    '38',
  ].includes(digits.slice(0, 2))) {
    return '.dinersclub';
  }

  if ([
    '31',
    '35',
  ].includes(digits.slice(0, 2))) {
    return '.jcb';
  }

  if ([
    '34',
    '37',
  ].includes(digits.slice(0, 2))) {
    return '.amex';
  }

  if (digits.startsWith('4')) {
    return '.visa';
  }

  if ([
    '50',
    '56',
    '57',
    '58',
    '63',
    '67',
  ].includes(digits.slice(0, 2))) {
    return '.maestro';
  }

  if ([
    '51',
    '52',
    '53',
    '54',
    '55',
  ].includes(digits.slice(0, 2))) {
    return '.mastercard';
  }

  if (digits.startsWith('60')) {
    return '.discover';
  }

  if (digits.startsWith('62')) {
    return '.unionpay';
  }

  return null;
}
