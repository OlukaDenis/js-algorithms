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
    while (current) {
      if(value === current.value) {
        return;
      }

      //Insert to the right
      if(value > current.value) {
        if(!current.right) {
          current.right = node
          break
        }
        current = current.right
      }
      
      //Insert to the left
      if(value < current.value){
        if(!current.left) {
          current.left = node
          break;
        } 
        current = current.left

      }
    }
  }
  

  find(value){
    if(!this.root) return 'Empty tree'

    let current = this.root;

    while(current){
      if(value === current.value) return current;

      if(current.right && value > current.value){
        current = current.right;
      }else{
        current = current.left;
      }
    }

    return false
  }

  contains(value) {
    const found = this.find(value);

    if(found) {
      return true;
    }

    return false;
  }
}

let BTS = new BinarySearchTree()

BTS.insert(4)
BTS.insert(1)
BTS.insert(5)
BTS.insert(10)
BTS.insert(9)

console.log(BTS.root)
console.log(BTS.find(9))

console.log(BTS.contains(1))