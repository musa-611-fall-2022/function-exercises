/* global describe, beforeAll, it, page, expect */

let output;
beforeAll(async () => {
  output = '';

  page.on('console', (msg) => {
    output += `${msg.text()}\n`;
  });
  await page.goto('http://10.103.82.200:8081/exercises/part1-fizzbuzz/');
  console.log(output);
});

describe('The console output', () => {
  it('should contain "Fizz" 33 times', async () => {
    const matches = output.match(/Fizz/g) || [];
    expect(matches.length).toEqual(33);
  });
  it('should contain "Buzz" 20 times', async () => {
    const matches = output.match(/Buzz/g) || [];
    expect(matches.length).toEqual(20);
  });
  it('should contain "FizzBuzz" 6 times', async () => {
    const matches = output.match(/FizzBuzz/g) || [];
    expect(matches.length).toEqual(6);
  });
});
