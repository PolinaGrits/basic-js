const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  str = String(str);
  let repT = (options.hasOwnProperty('repeatTimes')) ? options.repeatTimes : 1,
      sep = (options.hasOwnProperty('separator')) ? `${options.separator}` : "+",
     add = (options.hasOwnProperty('addition')) ? `${options.addition}` : "",
     addRT = (options.hasOwnProperty('additionRepeatTimes')) ? options.additionRepeatTimes : 1,
     addS = (options.hasOwnProperty('additionSeparator')) ? options.additionSeparator : "|",
     result = [],
     middleResult = [];

  for (let i = 1; i <= addRT; i++) {
    middleResult.push(add);
    middleResult.push(addS);
  }
  middleResult.pop();
  middleResult = middleResult.join('');

  for (let k = 1; k <= repT; k++) {
    result.push(str);
    result.push(middleResult);
    result.push(sep);
  }
  result.pop();
  
  return result.join('')
}

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }))


module.exports = {
  repeater
};
