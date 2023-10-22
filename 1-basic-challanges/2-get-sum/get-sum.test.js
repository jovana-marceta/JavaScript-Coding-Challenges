const getSum = require('./get-sum');

test('Calculating the sum of two numbers', () => {
  const num1 = 5;
  const num2 = 7;

  const result = getSum(num1, num2);

  expect(result).toBe(12);
});