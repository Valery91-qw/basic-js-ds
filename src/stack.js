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
    this.data = { length: 0 };
  }

  push(element) {
    this.data[this.data.length] = element;
    this.data.length++;
  }

  pop() {
    if(!this.data.length) return;
    this.data.length--;
    let elem = this.data[this.data.length];
    delete this.data[this.data.length];
    return elem;
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = {
  Stack
};
