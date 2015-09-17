function List() {
  List.makeNode = function() {
    return {data: null, next: null};
  }

  this.start = null;
  this.end = null;

  this.add = function(data) {
    if (this.start === null) {
      this.start = List.makeNode();
      this.end = this.start;
    } else {
      this.end.next = List.makeNode();
      this.end = this.end.next;
    };
    this.end.data = data;
  }

  this.insertAsFirst = function(data) {
    var temp = List.makeNode();
    temp.next = this.start;
    this.start = temp;
    temp.data = data;
  } 

  this.delete = function(data) {
    var current = this.start;
    var previous = this.start;
    while (current !== null) {
      if (data === current.data) {
        if (current === this.start) {
          this.start = current.next;
          return;
        };
        if (current === this.end) {
          this.end = previous;
          previous.next = current.next;
          return;
        };
        previous = current;
        current = current.next;
      };      
    };
  }

  this.insertAfter = function(node, data) {
    var current = this.start;
    var newNode = List.makeNode();
    while (current !== null) {
      if (current.data === node) {
        newNode;
        newNode.data = data;
        newNode.next = current.next
        current.next = newNode;
        if (current === this.end) {
          this.end = newNode;
          current.next = newNode;
          return;
        };
      };
      current = current.next;
    };
  }

  this.traverse = function() {
    var current = this.start;
    while (current !== null) {
      return current;
      current = current.next;
    };
  }

}

var list = new List();
for (var i = 0; i < 10; i++) {list.add(i)};
list.insertAfter(1,0);
list.insertAfter(9,0);
list.traverse();
list.end;  
