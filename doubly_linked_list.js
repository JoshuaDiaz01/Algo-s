// doubly linked list has access to the previous node as well
// this.tail gives the last thing in the list, need to assign it as we apply the list


/* 
TODO: Create the DLLNode class and implement the DoublyLinkedList constructor
and the empty methods below the constructor.
*/
class ListNode{


  consturctor(data){
    this.data = data
    this.next = null
    this.prev = null
  }
}

/**
 * A class to represent a doubly linked list and contain all of it's methods.
 * A doubly linked list is a singly linked list that can be traversed in both
 * directions.
 */
class DoublyLinkedList {
  /**
   * Executed when the new keyword is used to construct a new DoublyLInkedList
   * instance that inherits these methods and properties.
   */
  constructor() {
    // TODO: implement the constructor.
    this.head = null

    this.tail = null

  }

  /**
   * TODO: Implement this method
   * Creates a new node and adds it at the front of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtFront(data) {
    var newNode = new ListNode(data)
    //checking to see if list is empty
    if (this.isEmpty()){
      this.tail = newNode;
      this.head = newNode;
      return this;
    }
    
    newNode.prev = null;
    // making head the next node to make space
    newNode.next = this.head;
    // making new node
    this.head.prev = newNode;
    // assigning head to the new node
    this.head = newNode;
    return this;
  }

  /**
   * TODO: Implement this method
   * Creates a new node and adds it at the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data for the new node.
   * @returns {DoublyLinkedList} This list.
   */

  insertAtBack(data) {
    var newNode = new ListNode(data)
    if (this.isEmpty()){
      this.tail = newNode;
      this.head = newNode;
      return this;
    }
    //assigning prev to end
    newNode.prev = this.tail;
    //making next node empty
    newNode.next = null;
    // assigning the end to new node
    this.tail.next = newNode;
    // assigning tail to new node
    this.tail = newNode;
    return this;
  }

  // EXTRA
  /**
   * TODO: Implement this method
   * Removes the middle node in this list.
   * NOTE: If length of DLL is even, then there is no middle node. Need to check for this somehow...
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the removed node.
   */
  removeMiddleNode() {}

  /**
   * Determines if this list is empty.
   * - Time: O(1) constant.
   * - Space: O(1) constant.
   * @returns {boolean} Indicates if this list is empty.
   */
  isEmpty() {
    return this.head === null;
  }

  /**
   * Converts this list to an array of the node's data.
   * - Time: O(n) linear, n = list length.
   * - Space: O(n) linear, array grows as list length increases.
   * @returns {Array<any>} All the data of the nodes.
   */
  toArray() {
    const vals = [];
    let runner = this.head;

    while (runner) {
      vals.push(runner.data);
      runner = runner.next;
    }
    return vals;
  }

  /**
   * Adds all the given items to the back of this list.
   * @param {Array<any>} items Items to be added to the back of this list.
   * @returns {DoublyLinkedList} This list.
   */
  insertAtBackMany(items = []) {
    items.forEach((item) => this.insertAtBack(item));
    return this;
  }
}


  /**
   * TODO: implement this method
   * Inserts a new node with the given newVal after the node that has the
   * given targetVal as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} targetVal The node data to find.
   * @param {any} newVal Data for the new node.
   * @returns {boolean} Indicates if the new node was added.
   */
    function insertAfter(targetVal, newVal) {
      if (this.isEmpty()) {
        return false;
      }
  
      let runner = this.head;
  
      // runner && is in case runner becomes null so we don't check null.data
      while (runner && runner.data !== targetVal) {
        runner = runner.next;
      }
  
      if (runner === null) {
        return false;
      }
  
      const newNode = new DLLNode(newVal);
      newNode.prev = runner;
      newNode.next = runner.next;
  
      if (runner === this.tail) {
        this.tail = newNode;
      } else {
        // if runner was tail then next would be null.
        runner.next.prev = newNode;
      }
  
      runner.next = newNode;
      return true;
    }

   /**
    * TODO: implement this method
    * Inserts a new node with the given newVal before the node that has the
    * given targetVal as it's data.
    * - Time: O(?).
    * - Space: O(?).
    * @param {any} targetVal The node data to find.
    * @param {any} newVal Data for the new node.
    * @returns {boolean} Indicates if the new node was added.
    */
    function insertBefore(targetVal, newVal) {
      if (this.isEmpty()) {
        return false;
      }
  
      let runner = this.head;
  
      // This was written with a different structure than insertAfter to
      // for comparison purposes but the logic is almost the same.
      while (runner) {
        if (runner.data === targetVal) {
          const newNode = new DLLNode(newVal);
          newNode.next = runner;
          newNode.prev = runner.prev;
  
          if (runner === this.head) {
            this.head = newNode;
          } else {
            // if runner was head then prev would be null.
            runner.prev.next = newNode;
          }
  
          runner.prev = newNode;
          return true;
        }
  
        runner = runner.next;
      }
      return false;
    }



const emptyList = new DoublyLinkedList();

/**************** Uncomment these test lists after insertAtBack is created. ****************/
// const singleNodeList = new DoublyLinkedList().insertAtBack(1);
// const biNodeList = new DoublyLinkedList().insertAtBack(1).insertAtBack(2);
// const firstThreeList = new DoublyLinkedList().insertAtBackMany([1, 2, 3]);
// const secondThreeList = new DoublyLinkedList().insertAtBackMany([4, 5, 6]);
// const unorderedList = new DoublyLinkedList().insertAtBackMany([
//   -5,
//   -10,
//   4,
//   -3,
//   6,
//   1,
//   -7,
//   -2,
// ]);
