# ADT-lesson
ADT lesson assignment - ICS4UR

<hr><br>

## Tips
  1. Comment your code
  2. Seperate parts of assignment to keep it organized

## ADT Operations
These are the operations you will need to understand and utilise to complete this assignment
| Operation       | Stack (LIFO)        | Queue (FIFO)        | Linked List               |
|-----------------|--------------------|--------------------|--------------------------|
| **Add**         | `push()` (top)     | `enqueue()` (rear) | `prepend(), append()`|
| **Remove**      | `pop()` (top)      | `dequeue()` (front)| `popFirst(), pop(), remove()` |
| **Examine**     | `peek()` (top)     | `front()`          | `head(), tail()`    |
| **Check Empty** | `isEmpty()`        | `isEmpty()`        | `isEmpty()`               |
| **Size**        | `size()`           | `size()`           | `size()`                  |
| **Clear**       | `clear()`          | `clear()`          | `clear()`                 |

Remember, these are only concepts of each of the methods, you must write the code to implement these concepts! In this assignment, you will use classes (user defined types) to implement the ADTs


## Instructions
1. Complete the ADT Google form (googleForm.md file)
   
Your job is to set up the methods for each ADT, making sure each method follows the behavior described in [ADT Operations](#adt-operations). Don't forget to pass a parameter when calling methods that need them to provide an accurate result! Use [this page](https://www.w3schools.com/js/js_array_methods.asp) explaining all Javascript Array methods if you are unfamiliar with how to manipulate data in a JS Array. Go into `assignment.js` to complete your assignment.

2. Create a Stack class with the following methods:

    - push(item) – adds an item to the top

    - pop() – removes the top item

    - peek() – returns the top item without removing it

3. Test your stack by:

    - Pushing 2 items

    - Popping one

    - Printing the item on top with peek()
      
4. Using the Stack() class, create a Queue() class with the following methods:
   
    - enqueue() - adds an item to the end
  
    - dequeue() - removes item from the front
  
    - front() - returns the item from the front
  
5. Test your queue by:

    - enqueuing 2 items

    - dequeuing one

    - Printing the item in front with front()

## Stretch Goal
If you want an extra challenge, implement the common ADT methods, isEmpty(), size(), and clear() to both the Stack and Queue Class
