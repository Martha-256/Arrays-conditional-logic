const fizzBuzz = require('./fizzbuzz');


test('returns Fizzbuzz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz()).toBe('Fizzbuzz');
});

test('returns Fizz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz()).toBe('Fizz');
});

test('returns fizz when sum of length is divisible by 3 and 5 ', () => {
    expect(fizzBuzz()).toBe('Buzz');
});

/*test('returns sum of lengths if it is not divisible by 3 and 5 ', () => {
    expect(fizzBuzz()).toBe(sum);
}); */
