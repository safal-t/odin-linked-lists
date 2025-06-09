# Linked List Implementation

This project implements a singly linked list in JavaScript, following The Odin Project curriculum.

## Factory Functions

### Node

- Represents a single node in the list.
- Properties:
  - `value`: The data stored in the node (default: `null`).
  - `nextNode`: Reference to the next node (default: `null`).

### LinkedList

- Represents the entire linked list.
- Manages nodes and provides various utility methods.

## LinkedList Methods

- `append(value)`: Adds a new node containing `value` to the end of the list.
- `prepend(value)`: Adds a new node containing `value` to the start of the list.
- `size()`: Returns the total number of nodes in the list.
- `head()`: Returns the first node in the list.
- `tail()`: Returns the last node in the list.
- `at(index)`: Returns the node at the given `index`.
- `pop()`: Removes the last element from the list.
- `contains(value)`: Returns `true` if the passed-in value is in the list, otherwise `false`.
- `find(value)`: Returns the index of the node containing `value`, or `null` if not found.
- `toString()`: Returns a string representation of the list in the format:  
   `( value ) -> ( value ) -> ( value ) -> null`
- `insertAt(value, index)`: Inserts a new node with the provided value at the given index.
- `removeAt(index)`: Removes the node at the given index.

---

Feel free to implement these methods and extend the functionality as needed!
