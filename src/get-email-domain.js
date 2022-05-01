const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let res = "";
  for (let i = 0; i < email.length; i ++) {
    let item = "@"
    res = email.slice(email.indexOf(item)+1);
    if (res.includes(item)) {
      res = res.slice(res.indexOf(item)+1)
    }
  }
  return res;
}



module.exports = {
  getEmailDomain
};
