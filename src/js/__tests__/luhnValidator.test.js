import luhnValidator from '../luhnValidator';

test.each([
  ['null', '', null],
  ['null for >19 digits', '20000000000000000000000', null],
  ['null for <12 digits', '20000000', null],
  ['true', '371449635398431', true],
  ['false', '371449635398432', false],
  ['false', '000000000000', false],
])(('it should be %s'), (_, input, expected) => {
  expect(luhnValidator(input)).toBe(expected);
});
