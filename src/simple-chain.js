const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  res: [],
  getLength() {
    return this.res.length;
  },
  addLink(value) {
    this.res.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if ((Number.isInteger(position) === false) || (position < 1) || (position > this.res.length)) {
      this.res =[];
      throw new Error (`You can't remove incorrect link!`);
    } else {
      this.res.splice(position-1, 1);
          return this;
    }
  },
  reverseChain() {
    this.res.reverse();
    return this;
  },
  finishChain() {
    let word = this.res.join(' )~~( ');
    this.res = [];
    return `( ${word} )`;
  }
};

console.log(chainMaker.addLink(1).addLink(2).addLink(3).finishChain())


module.exports = {
  chainMaker
};
