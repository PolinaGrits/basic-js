const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let DNS = {};
  let arr = [];

  domains = domains.map(item => item.split('.').reverse());
  domains = domains.forEach(item => {
    let word = "";
    for (i of item) {
      word += `.${i}`;
      arr.push(word);
    }
  })
  console.log(DNS)
  for (word of arr) {
    //console.log(DNS)
    if (DNS.hasOwnProperty(word)) {
      DNS[word]++;
    } else {
      DNS[word] = 1;
    }
  }

  return DNS;
}



module.exports = {
  getDNSStats
};
