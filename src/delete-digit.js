const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */


function deleteDigit(n) {
  let res = [];
  n = n.toString();
  for (let item = 0; item < n.length; item++) {
    res.push(n.slice(0, item) + n.slice(item + 1));
    
  }
  res.sort((a,b) => (a-b));

  return Number(res.slice(-1).join(''));

}

//console.log(deleteDigit(222219))

module.exports = {
  deleteDigit
};
