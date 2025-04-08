/*
Instructions:

1. Create a Stack class with the following methods:

    - push(item) – adds an item to the top

    - pop() – removes the top item

    - peek() – returns the top item without removing it

2. Test your stack by:

    - Pushing 2 items

    - Popping one

    - Printing the item on top with peek()
*/

// Starter code:

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      // TODO: Add item to the stack
    }
  
    pop() {
      // TODO: Remove and return the top item
    }
  
    peek() {
      // TODO: Return the top item without removing it
    }
  }

  // Try it out!
const stack = new Stack();
stack.push("A");
stack.push("B");
console.log(stack.pop());   // Should print: B
console.log(stack.peek());  // Should print: A
