const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  #head = null;
  #tail = null;


  constructor() {
  }

  getUnderlyingList() {
    return this._head
  }

  enqueue(value) {
    const elem = new ListNode(value);
    if(!this._tail && !this._head) {
      this._head = elem;
      this._tail = elem;
    } else {
      this._tail.next = elem;
      this._tail = elem;
    }
  }

  dequeue() {
    const temp = this._head.next;
    const value = this._head.value
    this._head = temp;
    return value;
  }
}

module.exports = {
  Queue
};
