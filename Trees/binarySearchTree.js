'use strict'

class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  
  constructor() {
    this.root = null
  }

  insert(value) {
    let node = new Node(value)

    if(!this.root) {
      this.root = node
    }

    let current = this.root
    if(value === current.value) return undefined

    if(value > current.value) {
      if(current.right) {
        current = current.right
        return
      } else {
        current.right = node
      }
    } else {
      if(current.left) {
        current = current.left
        return
      } else {
        current.left = node
      }
    }
  }
}

let BTS = new BinarySearchTree()

BTS.insert(4)
BTS.insert(1)
BTS.insert(5)
BTS.insert(10)

console.log(BTS.root)