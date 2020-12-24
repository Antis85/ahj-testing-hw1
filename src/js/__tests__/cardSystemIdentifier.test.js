import cardSystemIdentifier from '../cardSystemIdentifier';

test.each([
  ['null', '', null],
  ['null', '000000000000', null],
  ['null for >19 digits', '20000000000000000000000', null],
  ['null for <12 digits', '20000000', null],
  ['mir vendor', '200000000000', '.mir'],
  ['diners club vendor', '300000000000', '.dinersclub'],
  ['diners club vendor', '360000000000', '.dinersclub'],
  ['diners club vendor', '380000000000', '.dinersclub'],
  ['jcb vendor', '310000000000', '.jcb'],
  ['jcb vendor', '350000000000', '.jcb'],
  ['american express vendor', '340000000000', '.amex'],
  ['american express vendor', '370000000000', '.amex'],
  ['visa vendor', '400000000000', '.visa'],
  ['maestro vendor', '500000000000', '.maestro'],
  ['maestro vendor', '560000000000', '.maestro'],
  ['maestro vendor', '570000000000', '.maestro'],
  ['maestro vendor', '580000000000', '.maestro'],
  ['maestro vendor', '630000000000', '.maestro'],
  ['maestro vendor', '670000000000', '.maestro'],
  ['mastercard vendor', '510000000000', '.mastercard'],
  ['mastercard vendor', '520000000000', '.mastercard'],
  ['mastercard vendor', '530000000000', '.mastercard'],
  ['mastercard vendor', '540000000000', '.mastercard'],
  ['mastercard vendor', '550000000000', '.mastercard'],
  ['discover vendor', '600000000000', '.discover'],
  ['unionpay vendor', '620000000000', '.unionpay'],
])(('it should be %s'), (_, input, expected) => {
  expect(cardSystemIdentifier(input)).toBe(expected);
});
