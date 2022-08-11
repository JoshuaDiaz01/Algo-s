// return false if the linked list is empty

function isEmpty(data){
    return this.head == null;
}


//add something to your linked list

function insertAtBack(data){
    var newNode = new ListNode(data);
    let runner = this.head
    if(this.head == null){
        this.head = data;
    }
    while(runner !=null){
        if(runner.next == null){
            runner.next = data;
        }
        runner = runner.next;
    }
}






//   /******************************************************************* 
//   Multiple test lists already constructed to test your methods on.
//   Below commented code depends on insertAtBack method to be completed,
//   after completing it, uncomment the code.
//   */
//   const emptyList = new SinglyLinkedList();

//   const singleNodeList = new SinglyLinkedList().insertAtBackMany([1]);
//   const biNodeList = new SinglyLinkedList().insertAtBackMany([1, 2]);
//   const firstThreeList = new SinglyLinkedList().insertAtBackMany([1, 2, 3]);
//   const secondThreeList = new SinglyLinkedList().insertAtBackMany([4, 5, 6]);
//   const unorderedList = new SinglyLinkedList().insertAtBackMany([
//     -5, -10, 4, -3, 6, 1, -7, -2,
//   ]);

//   /* node 4 connects to node 1, back to head */
//   // const perfectLoopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
//   // perfectLoopList.head.next.next.next = perfectLoopList.head;

//   /* node 4 connects to node 2 */
//   // const loopList = new SinglyLinkedList().insertAtBackMany([1, 2, 3, 4]);
//   // loopList.head.next.next.next = loopList.head.next;

//   // const sortedDupeList = new SinglyLinkedList().insertAtBackMany([
//   //   1, 1, 1, 2, 3, 3, 4, 5, 5,
//   // ]);

//   // Print your list like so: