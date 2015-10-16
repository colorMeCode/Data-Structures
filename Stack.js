// construct a basic stack method that implements the LIFO concept of data management
function Stack() {
  //create a new array
  var stack = [];
  return stack;
}

// remove and return the last element added to the top of the stack 
Stack.prototype.pop = function() {
  return this.stack.pop();
};


// add additional "item" to the top of the stack
// potentially include additional data with an array item:
 // stack.push([item, date]);
Stack.prototype.push = function(item) {
  this.stack.push(item);
};

var books = new Stack();
books.push("JavaScript: The Good Parts");
books.push("Cracking The Coding Interview");
books.push("Dictionary of Computer and Internet Terms");
alert(books.pop());
alert(books.pop());
console.log(books);

