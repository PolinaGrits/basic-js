const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */


class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    let count = 0;
    //начало
    for (let i = 0; i < arr.length; i++){
      if (Array.isArray(arr[i])) { // если еще не достали до дна
        depth = Math.max(this.calculateDepth(arr[i])) //на уровень ниже
        //count = (count < depth) ? depth : count;  
        if (count < depth) {
          count = depth; 
        } else {
          count = count;
        }
      }
    }
    return ++count;
  }
}




module.exports = {
  DepthCalculator
};
