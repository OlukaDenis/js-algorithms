'use strict';

class Node {
  constructor(value, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {

  constructor () {
    this.head = null;
    this.tail = null;
  }

  insertEnd (number) {
    const node = new Node(number)
    if (this.head === null) {     
      this.head = node;
      this.tail = node;
    } else {
      this.tail.nextNode = node;
      this.tail = node;
    }
  }

  insertBeginning (number) {
    const node = new Node(number);
    if (this.head === null) {     
      this.head = node;
      this.tail = node;
    } else {
      node.nextNode = this.head
      this.head = node
    }
  }

  getSize () {
    let count = 0;
    let node = this.head;
  
    while(node) {
      count += 1;
      node = node.nextNode;

    }  
    return count
  }

  getAt(index) {
    let node = this.head;
    let count = 0;
    
    if (index > this.getSize()) {
      return 'No node found';
    }

    while(node) {
      if (count === index) {
        return node;
      }
      node = node.nextNode;
      count += 1;
    }

    return node;
  }

  insertAt (index, number) {
    const previous = this.getAt(index - 1);
    const node = new Node(number);

    if (!this.head) { 
      this.head = node;
      return;
    }

    if (index === 0) {
      this.head = new Node(number, this.head);
      return;
    }
    
    node.nextNode = previous.nextNode;
    previous.nextNode = node;
  }

  deleteAt (index) {
    if (!this.head) {
      return 'List is empty';
    }

    if (index === 0) {
      this.head = head.nextNode;
      return;
    }

    const previous = this.getAt(index -1);
    const current = this.getAt(index);
    previous.nextNode = current.nextNode;
  }
}

const List = () => {
  let list = new LinkedList()
  list.insertEnd(2);
  list.insertEnd(4);
  list.insertBeginning(3);
  list.insertBeginning(8);
  list.insertAt(1, 5);

  return list;
}

const midddleElement = () => {
  let list = List();

  const size = list.getSize();
  let mid = size / 2;

  if (size%2 === 1) {
    mid = Math.floor(mid);
  }

  return list.getAt(mid);
}



console.log(midddleElement());





