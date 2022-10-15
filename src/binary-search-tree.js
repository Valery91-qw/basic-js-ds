const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  #_tree = null;

  root() {
    return this.#_tree;
  }

  add(data) {
    const element = new Node(data);
    if (!this.#_tree) this.#_tree = element;
    else this.#addToNode(this.#_tree, data);
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.#_tree;
    while (current.left) {
      current = current.left;
    }
    return current.data
  }

  max() {
    let current = this.#_tree;
    while (current.right) {
      current = current.right;
    }
    return current.data
  }

  #addToNode(tree, data) {
    if(tree.data > data) {
      if(tree.left === null) {
        tree.left = new Node(data);
      } else {
        this.#addToNode(tree.left, data)
      }
    } else {
      if(tree.right === null) {
        tree.right = new Node(data);
      } else {
        this.#addToNode(tree.right, data)
      }
    }
  }
}

const bin = new BinarySearchTree();
bin.add(10)
bin.add(7)
bin.add(14)
bin.add(15)
bin.add(3)
bin.add(22)
bin.add(9)
console.dir(bin.root(), {depth: 20})

module.exports = {
  BinarySearchTree
};