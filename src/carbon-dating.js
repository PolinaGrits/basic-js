const { NotImplementedError } = require('../extensions/index.js');



/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

function dateSample(sampleActivity) {
  if ((typeof(sampleActivity) === 'string') ){
    if ((typeof(+sampleActivity) !== 'number') || (isFinite(sampleActivity) === false)) return false;
    if ((+sampleActivity <= 0) || (+sampleActivity > MODERN_ACTIVITY)) return false;
    const rateConstant = 0.693/HALF_LIFE_PERIOD;
    let result = (Math.log(MODERN_ACTIVITY) - Math.log((+sampleActivity)))/rateConstant;
    return Math.ceil(result);
  } else {
    return false;
  } 
}
 


module.exports = {
  dateSample
};
