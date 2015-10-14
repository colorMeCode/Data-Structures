function LinkedStack() {
  this.head = null;
  this.tail = null;
}

LinkedStack.prototype.makeNode = function(value) {
  var node = {};
  node.prev = null;
  node.data = value;
  node.next = null;
  return node;
};

LinkedStack.prototype.push = function(value) {
  if (!this.head) {
    this.head = this.makeNode(value);
    this.tail = this.head;
  } else {
    this.tail.next = this.makeNode(value);
    this.tail.next.prev = this.tail;
    this.tail = this.tail.next;
  }
};

LinkedStack.prototype.pop = function() {
  var temp = this.tail.data;
  this.tail = this.tail.prev;
  this.tail.next = null;
  return temp;
};

LinkedStack.prototype.traverse = function() {
  var curr = this.head,
    stack = [];
  while (curr !== null) {
    stack.push(curr.data);
    curr = curr.next;
  }
  return stack;
};

var stack = new LinkedStack();
stack.push(0);
stack.push(1);
console.time("push");
stack.push(2);
console.timeEnd("push");
stack.traverse();
console.time("pop");
stack.pop();
console.timeEnd("pop");

// Conclusion: performance of linked stack is slower by ~.010 milliseconds.
// Only implement this if absolutely necessary - the push and pop methods
// on regular arrays are high performant enough to negate a "previous" pointer
