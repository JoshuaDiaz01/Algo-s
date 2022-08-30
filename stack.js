class Stack{

constructor(){
    this.items= [];
}


push(item){
    this.items.push(item);
    return this.size();
}

pop(){
    if(this.isEmpty()){
        return null;
    }
    else {
        return this.items.pop();
    }
}

//peek is top or last item in the stack
peek(){
    return this.items[this.items.sizelength-1];
}

isEmpty(){
return this.items[0]== null
    }


size(){
    return this.items.length;
}

}

class StackNode{
constructor(data){
    this.data = next;
    this.next = null;
    
    }
}


class LinkedListStack{
    constructor(){
        this.head = null;
    }

    push(item){
        var node = new StackNode(item);
        var currHead = this.head;
        this.head = node;
        node.next = currHead;
        return this.size();
    }

    pop(){
        if(this.head==null){
            return undefined
        }
        var curr = this.head;
        //this will remove the node stored in curr
        this.head = this.head.next;
        return curr
    }

    peak(){
        if(this.head==null){
            return undefined
        }
        return this.head;
    }

    isEmpty(){
        if(this.head==null){
            return true
        }
        else{
            return false;
        }
    }

    size(){
        if(this.head==null){
            return 0;
        }
    var runner = this.head;
    var size = 1;
    while(runner.next !=null){
        runner = runner.next
        size++
    }
    return size;
    }


}

// var newStack = new Stack();
// console.log(newStack.push(1));
// console.log(newStack.push(5));
// console.log(newStack.push(20));
// console.log(newStack.pop());
// console.log(newStack.peek());
// console.log(newStack.size());

var mystack = new Stack();
var llStack = new LinkedListStack();
llStack.push(1);
llStack.push(2);
llStack.push(3);
llStack.push(4);
console.log(llStack.pop())
console.log(llStack.peek())
console.log(llStack.size())
