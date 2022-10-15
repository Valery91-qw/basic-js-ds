const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this._data = { length: 0 };
  }

  push(element) {
    this._data[this._data.length] = element;
    this._data.length++;
  }

  pop() {
    if(!this._data.length) return;
    this._data.length--;
    let elem = this._data[this._data.length];
    delete this._data[this._data.length];
    return elem;
  }

  peek() {
    return this._data[this._data.length - 1];
  }
}

module.exports = {
  Stack
};
