const DEFAULT_BASE = 37;
const DEFAULT_MODULUS = 101;

export default class PolynomialHash {
  /**
   * @param {number} [base] - Base number that is used to create the polynomial.
   * @param {number} [modulus] - Modulus number that keeps the hash from overflowing.
   */
  constructor({ base = DEFAULT_BASE, modulus = DEFAULT_MODULUS } = {}) {
    this.base = base;
    this.modulus = modulus;
  }

  /**
   * Function that creates hash representation of the word.
   *
   * Time complexity: O(word.length).
   *
   * @param {string} word - String that needs to be hashed.
   * @return {number}
   */
  hash(word) {
    const charCodes = Array.from(word).map((char) => this.charToNumber(char));

    let hash = 0;
    for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
      hash *= this.base;
      hash += charCodes[charIndex];
      hash %= this.modulus;
    }

    return hash;
  }

  /**
   * Function that creates hash representation of the word
   * based on previous word (shifted by one character left) hash value.
   *
   * Recalculates the hash representation of a word so that it isn't
   * necessary to traverse the whole word again.
   *
   * Time complexity: O(1).
   *
   * @param {number} prevHash
   * @param {string} prevWord
   * @param {string} newWord
   * @return {number}
   */
  roll(prevHash, prevWord, newWord) {
    let hash = prevHash;

    const prevValue = this.charToNumber(prevWord[0]);
    const newValue = this.charToNumber(newWord[newWord.length - 1]);

    let prevValueMultiplier = 1;
    for (let i = 1; i < prevWord.length; i += 1) {
      prevValueMultiplier *= this.base;
      prevValueMultiplier %= this.modulus;
    }

    hash += this.modulus;
    hash -= (prevValue * prevValueMultiplier) % this.modulus;

    hash *= this.base;
    hash += newValue;
    hash %= this.modulus;

    return hash;
  }

  /**
   * Converts char to number.
   *
   * @param {string} char
   * @return {number}
   */
  charToNumber(char) {
    let charCode = char.codePointAt(0);

    // Check if character has surrogate pair.
    const surrogate = char.codePointAt(1);
    if (surrogate !== undefined) {
      const surrogateShift = 2 ** 16;
      charCode += surrogate * surrogateShift;
    }

    return charCode;
  }
}




// export default class Hash {
//   p1 = 31;
//   p2 = 37;
//   m1 = 1000000007;
//   m2 = 1000000009;
//   // hash1 = 0;
//   // hash2 = 0;
//   constructor(str) {
//     compute_hashes(str)
//   }

//   compute_hashes(str) {
//     pow1 = 1, pow2 = 1
//     hash1 = 0, hash2 = 0
//     for (ch in s) {
//       seed = 1 + ch.charCodeAt() - 'a'.charCodeAt()
//       hash1 = (hash1 + seed * pow1) % self.m1
//       hash2 = (hash2 + seed * pow2) % self.m2
//       pow1 = (pow1 * self)
//     }
//   }
// }