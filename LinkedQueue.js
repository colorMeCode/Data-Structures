function LinkedQueue() {
  this.head = null;
  this.tail = null;
}

LinkedQueue.prototype.makeNode = function(value) {
  var node = {};
  node.data = value;
  node.next = null;
  return node;
};

LinkedQueue.prototype.enqueue = function(value) {
  if (this.head === null) {
    this.head = this.makeNode(value);
    this.tail = this.head;
  } else {
    this.tail.next = this.makeNode(value);
    this.tail = this.tail.next;
  }
};

LinkedQueue.prototype.dequeue = function() {
  var temp = this.head.data;
  this.head = this.head.next;
  return temp;
};

LinkedQueue.prototype.traverse = function() {
  var curr = this.head,
    queue = [];
  while (curr !== null) {
    queue.push(curr.data);
    curr = curr.next;
  }
  return queue;
};

var todo = new LinkedQueue();
todo.enqueue("Wake up and smile.");
todo.enqueue("Eat a hearty breakfast.");
todo.enqueue("Turn on computer.");
todo.enqueue("Make love with JavaScript.");
todo.enqueue("Build an app for the world.");
todo.enqueue("Sleep and repeat.");
todo.traverse();
