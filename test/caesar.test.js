const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
  // Test case 1: Encoding
  it("should return an encoded string when proper inputs are given", () => {
    const actual = caesar("thinkful", 3);
    const expected = "wklqnixo";
    expect(actual).to.equal(expected);
  });

  // Test case 2: Decoding
  it("should return a decoded string when given proper inputs", () => {
    const expected = "thinkful";
    const actual = caesar("wklqnixo", 3, false);
    expect(actual).to.equal(expected);
  });

  // Test case 3: Handling shift value not present
  it("should return false if shift value is not present", () => {
    const actual = caesar("thinkful");
    expect(actual).to.be.false;
  });

  // Test case 4: Handling shift value of 0
  it("should return false if shift value is 0", () => {
    const actual = caesar("thinkful", 0);
    expect(actual).to.be.false;
  });

  // Test case 5: Handling shift value less than -25
  it("should return false if shift value is less than -25", () => {
    const actual = caesar("thinkful", -26);
    expect(actual).to.be.false;
  });

  // Test case 6: Handling shift value greater than 25
  it("should return false if shift is greater than 25", () => {
    const actual = caesar("thinkful", 26);
    expect(actual).to.be.false;
  });

  // Test case 7: Maintaining spaces and symbols while encoding
  it("should maintain spaces and other non-alphabetic symbols in the encoded string", () => {
    const expected = "#wklqnixo!";
    const actual = caesar("#thinkful!", 3);
    expect(actual).to.equal(expected);
  });

  // Test case 8: Maintaining spaces and symbols while decoding
  it("should maintain spaces and other non-alphabetic symbols in the decoded string", () => {
    const expected = "#thinkful!";
    const actual = caesar("#wklqnixo!", 3, false);
    expect(actual).to.equal(expected);
  });

  // Test case 9: Ignoring capital letters
  it("should ignore capital letters when encoding or decoding", () => {
    const expectedEncode = "wklqnixo";
    const actualEncode = caesar("Thinkful", 3);
    expect(actualEncode).to.equal(expectedEncode);
    const expectedDecode = "thinkful";
    const actualDecode = caesar("WKLqnIxO", 3, false);
    expect(actualDecode).to.equal(expectedDecode);
  });

  // Test case 10: Wrapping around to the front of the alphabet
  it("should wrap around to the front of the alphabet if a letter shifts 'off' the back", () => {
    const expectedEncode = "bpqa qa i amkzmb umaaiom!";
    const actualEncode = caesar("This is a secret message!", 8);
    expect(actualEncode).to.equal(expectedEncode);
    const expectedDecode = "this is a secret message!";
    const actualDecode = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
    expect(actualDecode).to.equal(expectedDecode);
  });

  // Test case 11: Wrapping around to the back of the alphabet
  it("should wrap around to the back of the alphabet if a letter shifts 'off' the front", () => {
    const expectedEncode = "tsucosjvk!";
    const actualEncode = caesar("Backwards!", -8);
    expect(actualEncode).to.equal(expectedEncode);
    const expectedDecode = "backwards!";
    const actualDecode = caesar("tsucosjvk!", -8, false);
    expect(actualDecode).to.equal(expectedDecode);
  });
});
