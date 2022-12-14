/* global describe, beforeAll, it, page, expect */

beforeAll(async () => {
  await page.goto('http://10.103.82.200:8081/exercises/part2-basic-functions/');
});

describe('The age function', () => {
  /* globals age */
  it('should return the number of years past', async () => {
    const value = await page.evaluate(() => age(1983));
    const currentYear = (new Date()).getFullYear();
    expect(value).toEqual(currentYear - 1983);
  });
});

describe('The plusOne function', () => {
  /* globals plusOne */
  it('should return one more than the given value', async () => {
    const value = await page.evaluate(() => plusOne(77));
    expect(value).toEqual(78);
  });
});

describe('The timesThree function', () => {
  /* globals timesThree */
  it('should return three times the given value', async () => {
    const value = await page.evaluate(() => timesThree(20));
    expect(value).toEqual(60);
  });
});

describe('The add function', () => {
  /* globals add */
  it('should return the sum of the two given values', async () => {
    const value = await page.evaluate(() => add(15, 25));
    expect(value).toEqual(40);
  });
});

describe('The multiply function', () => {
  /* globals multiply */
  it('should return the product of the two given values', async () => {
    const value = await page.evaluate(() => multiply(7, 8));
    expect(value).toEqual(56);
  });
});

describe('The valueAtIndex function', () => {
  /* globals valueAtIndex */
  it('should return value at the given index in the given array', async () => {
    const value = await page.evaluate(() => valueAtIndex([1, 3, 9, 27, 81, 243], 3));
    expect(value).toEqual(27);
  });
});

describe('The valueAtKey function', () => {
  /* globals valueAtKey */
  it('should return value at the given index in the given array', async () => {
    const value = await page.evaluate(() => valueAtKey({ k1: 2, k2: 4, k3: 6 }, 'k2'));
    expect(value).toEqual(4);
  });
});

describe('The isEven function', () => {
  /* globals isEven */
  it('should return true if the value is even, false otherwise', async () => {
    let value;

    value = await page.evaluate(() => isEven(2));
    expect(value).toEqual(true);
    value = await page.evaluate(() => isEven(132));
    expect(value).toEqual(true);


    value = await page.evaluate(() => isEven(3));
    expect(value).toEqual(false);
    value = await page.evaluate(() => isEven(133));
    expect(value).toEqual(false);
  });
});

describe('The isOdd function', () => {
  /* globals isOdd */
  it('should return true if the value is odd, false otherwise', async () => {
    let value;

    value = await page.evaluate(() => isOdd(2));
    expect(value).toEqual(false);
    value = await page.evaluate(() => isOdd(132));
    expect(value).toEqual(false);


    value = await page.evaluate(() => isOdd(3));
    expect(value).toEqual(true);
    value = await page.evaluate(() => isOdd(133));
    expect(value).toEqual(true);
  });
});
