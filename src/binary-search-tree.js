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

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    let current = this.#_tree;
    while (current) {
      if(current.data !== data) {
        if(current.data > data) {
          current = current.left;
        } else {
          current = current.right;
        }
      } else {
        return current
      }
    }
    return null
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

module.exports = {
  BinarySearchTree
};