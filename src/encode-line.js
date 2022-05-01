const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let item = str[i];
    let count = 1;
    while (item === str[i+1]) {
      count++;
      i++
    }
    if (count === 1) {
      res += item
    } else {
      res += `${count}${item}`
    }
  }
  return res;
}

console.log(encodeLine('abbcca'))

module.exports = {
  encodeLine
};
