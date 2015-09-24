function LinkedList() {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.node = function() {
  return {
    data: null,
    next: null
  };
};

LinkedList.prototype.add = function(value) {
  var node = this.node();

  if (!this.head) {
    this.head = node;
    this.tail = this.head;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
    node.data = value;
};

LinkedList.prototype.delete = function(value) {
  var current = this.head;
  var prev;

  while (current !== null) {
    if (current.data === value) {
      if (current === this.head) {
        this.head = current.next;
      }
      if (current === this.tail) {
        this.tail = prev;
        prev.next = null;
      }
      prev.next = current.next;
    }
    prev = current;
    current = current.next;
  }
};

LinkedList.prototype.item = function(i) {
  var current = this.head;

  while (current !== null) {
    i--;
    if (i === 0) {
      return current;
    }
    current = current.next;
  }
};

LinkedList.prototype.filter = function(test) {
  var result = [];
  this.each(function(item) {
    if (test(item)) {
      result.push(item);
    }
  });
  return result;
};

LinkedList.prototype.each = function(callback) {
  var current = this.head;

  while (current !== null) {
    callback(current.data);
    current = current.next;
  }
};

LinkedList.prototype.traverse = function() {
  var current = this.head;

  while (current !== null) {
    return current;
    current = current.next;
  }
};
