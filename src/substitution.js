// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {

    // Returns false if the given alphabet isn't exactly 26 characters long
    if (!alphabet || alphabet.length !== 26) {
      return false;
    } 

    // Split the alphabet into an array of characters and sort it
    const alphabetArray = alphabet.split("");
    const sortedAlphabetArray = alphabetArray.sort();

    // Returns false if there are any duplicate characters in the given alphabet
    let isAlphabetUnique = true;

    sortedAlphabetArray.forEach((char, index) => {
      if (index < sortedAlphabetArray.length - 1) {
        const nextChar = sortedAlphabetArray[index + 1];
        if (char === nextChar){
          isAlphabetUnique = false;
        }
      }
    });
    
    if (!isAlphabetUnique) {
      return false;
    }

    // Will ignore capital letters
    const lowerCaseInput = input.toLowerCase();

    // Split the input into an array of characters
    const inputArray = lowerCaseInput.split("");
    const charCodeA = "a".charCodeAt(0);

    if (encode) {
      // Create an array to store encoded characters
      const encodedArray = inputArray.map(char => {
        // Maintains spaces in the message
        if (char === " ") {
          return char;
        }
        const charIndex = char.charCodeAt(0) - charCodeA;
        return alphabet[charIndex];
      });

      // Join the encoded array into a string and return
      return encodedArray.join("");
    }

    // For decoding
    const decodedArray = inputArray.map(char => {
      // Maintains spaces in the message
      if (char === " ") {
        return char;
      }
      const charIndex = alphabet.indexOf(char);
      const charCode = charCodeA + charIndex;
      return String.fromCharCode(charCode);
    });

    // Join the decoded array into a string and return
    return decodedArray.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
