const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
  // Test case 1: Encoding
  it("should return an encoded string of numbers when given proper inputs", () => {
    const expected = "4432423352125413";
    const actual = polybius("thinkful");
    expect(actual).to.equal(expected);
  });

  // Test case 2: Decoding
  it("should return a decoded string when given proper inputs", () => {
    const expected = "secret";
    const actual = polybius("345131245144", false);
    expect(actual).to.equal(expected);
  });

  // Test case 3: Ignoring capital letters
  it("should ignore capital letters in the input", () => {
    const expected = "4432423352125413";
    const actual = polybius("Thinkful");
    expect(actual).to.equal(expected);
  });

  // Test case 4: Maintaining spaces in the encoded output
  it("should maintain spaces in the encoded output", () => {
    const expected = "3251131343 2543241341";
    const actual = polybius("Hello World");
    expect(actual).to.equal(expected);
  });

  // Test case 5: Maintaining spaces in the decoded output
  it("should maintain spaces in the decoded output", () => {
    const expected = "hello world";
    const actual = polybius("3251131343 2543241341", false);
    expect(actual).to.equal(expected);
  });

  // Test case 6: Decoding with odd number of characters
  it("should return false when decoding if input has odd number of characters (excludes spaces)", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });

  // Test case 7: Encoding 'I' and 'J'
  it("should convert both 'I' and 'J' to 42 when encoding", () => {
    const actual = polybius("jingle");
    const expected = "424233221351";
    expect(actual).to.equal(expected);
  });

  // Test case 8: Decoding coordinate '42' to 'I/J'
  it("should show both 'I' and 'J' when decoding the coordinate '42'", () => {
    const expected = "th(i/j)nkful";
    const actual = polybius("4432423352125413", false);
    expect(actual).to.equal(expected);
  });
});
