function removeBack(){
    let runner = this.Headers;
    let spy = runner.next;

    while (runner.next !=null){
        if (spy.next ==null ){
            //set the second to last node's next to null
            runner.next = null;
            return spy.data
        }
        spy = spy.next
    }


}