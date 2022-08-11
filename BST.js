/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
 class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
      this.data = data;
      /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
      this.left = null;
      /** @type {BSTNode|null} */
      this.right = null;
    }
  }
  
  /**
   * Represents an ordered tree of nodes where the data of left nodes are <= to
   * their parent and the data of nodes to the right are > their parent's data.
   */
  class BinarySearchTree {
    constructor() {
      /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
      this.root = null; //head is now called root
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        if (this.root == null){
            return true;
        } else{
            return false;
        }
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        while(current.left !=null){
            current = current.left;
        }
        return current.data;
    }
    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        if(current.left !=null){
            return this.minRecursive(current.left);
        }
        else {
            return current.data;
        }
    }
    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        while(current.right !=null){
            current = current.right;
        }
        return current.data;
    }
  
    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        if(current.right !=null){
            return this.minRecursive(current.right);
        }
        else {
            return current.data;
        }
    }
  
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
      if (!node) {
        return;
      }
  
      spaceCnt += spaceIncr;
      this.print(node.right, spaceCnt);
  
      console.log(
        " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
          `${node.data}`
      );
  
      this.print(node.left, spaceCnt);
    }
  }
  
  const emptyTree = new BinarySearchTree();
  const oneNodeTree = new BinarySearchTree();
  oneNodeTree.root = new BSTNode(10);
  
  /* twoLevelTree
          root
          10
        /   \
      5     15
  */
  const twoLevelTree = new BinarySearchTree();
  twoLevelTree.root = new BSTNode(10);
  twoLevelTree.root.left = new BSTNode(5);
  twoLevelTree.root.right = new BSTNode(15);
  
  /* threeLevelTree 
          root
          10
        /   \
      5     15
    / \    / \
  2   6  13  
  */
  const threeLevelTree = new BinarySearchTree();
  threeLevelTree.root = new BSTNode(10);
  threeLevelTree.root.left = new BSTNode(5);
  threeLevelTree.root.left.left = new BSTNode(2);
  threeLevelTree.root.left.right = new BSTNode(6);
  threeLevelTree.root.right = new BSTNode(15);
  threeLevelTree.root.right.left = new BSTNode(13);
  
  /* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */

 // ****************************************************************************
  // DAY 2
  // ****************************************************************************

  /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */

    function contains(searchVal) {
      let runner = this.root;
      while(runner !=null){
        if(runner.data > searchval){
          runner = runner.left;
        }
        else if(runner.data < searchVal){
          runner = runner.right
        }
        else if(runner.data == searchVal){
          return true;
        }
      }
      return false;
    }


   /**
    * Determines if this tree contains the given searchVal.
    * - Time: O(?).
    * - Space: O(?).
    * @param {number} searchVal The number to search for in the node's data.
    * @returns {boolean} Indicates if the searchVal was found.
    */
   function containsRecursive(searchVal, current = this.root) {
    if(current == null){
      return false;
    }
    if(current.data > searchVal){
      return this.containsRecursive(searchVal, current = current.left);
    }
    else if(current.data < searchVal){
      return this.containsRecursive(searchVal, current = current.right);
    }
    else if(current.data == searchVal){
      return true
    }
    return false;
   }

 
   /**
    * Calculates the range (max - min) from the given startNode.
    * If left and right are null, then return null
    * If left or right is present, then range is calculated used
    * parent node and the present child node.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} startNode The node to start from to calculate the range.
    * @returns {number|null} The range of this tree or a sub tree depending on if the
    *    startNode is the root or not.
    */
   function range(startNode = this.root) {}
 
 
 const empTree = new BinarySearchTree();
 const oneNodeTree = new BinarySearchTree();
 oneNodeTree.root = new BSTNode(10);
 
 /* twoLevelTree
         root
         10
       /   \
     5     15
 */
 const twoLevelTree = new BinarySearchTree();
 twoLevelTree.root = new BSTNode(10);
 twoLevelTree.root.left = new BSTNode(5);
 twoLevelTree.root.right = new BSTNode(15);
console.log(contains(5));
console.log(twoLevelTree.containsRecursive(5));
 
 /* threeLevelTree 
         root
         10
       /   \
     5     15
   / \    / \
 2   6  13  
 */
 const threeLevelTree = new BinarySearchTree();
 threeLevelTree.root = new BSTNode(10);
 threeLevelTree.root.left = new BSTNode(5);
 threeLevelTree.root.left.left = new BSTNode(2);
 threeLevelTree.root.left.right = new BSTNode(6);
 threeLevelTree.root.right = new BSTNode(15);
 threeLevelTree.root.right.left = new BSTNode(13);
 
 /* fullTree
                     root
                 <-- 25 -->
               /            \
             15             50
           /    \         /    \
         10     22      35     70
       /   \   /  \    /  \   /  \
     4    12  18  24  31  44 66  90
 */

  // ****************************************************************************
  // DAY 3
  // ****************************************************************************

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
  function insert(newVal) {
    let current = this.root;
    let newNode = new BSTNode(newVal);
    if (current == null){
      this.root = newNode;
    }

    while(current !=null ){
      if(newVal < current.data && current.left == null){
        current.left = newNode;
        return this;
      }
      else if (newVal > current.data && current.right == null){
      current.right = newNode;
      return this;
    }
    if (newVal < current.data && current.left !=null){
      current = current.left;
    }
    else if (newVal > current.data && current.right !=null){
      current = current.right;
    }
  } 
  return this;
  }

  /**
   * Inserts a new node with the given newVal in the right place to preserver
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
   function insertRecursive(newVal, curr = this.root) {
    if (this.isEmpty()) {
      this.root = new BSTNode(newVal);
      return this;
    }

    if (newVal > curr.data) {
      if (curr.right === null) {
        curr.right = new BSTNode(newVal);
        return this;
      }
      return this.insertRecursive(newVal, curr.right);
    }

    if (curr.left === null) {
      curr.left = new BSTNode(newVal);
      return this;
    }
    return this.insertRecursive(newVal, curr.left);
  }

const tree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//   .insert(25)
//   .insert(15)
//   .insert(10)
//   .insert(22)
//   .insert(4)
//   .insert(12)
//   .insert(18)
//   .insert(24)
//   .insert(50)
//   .insert(35)
//   .insert(70)
//   .insert(31)
//   .insert(44)
//   .insert(66)
//   .insert(90);