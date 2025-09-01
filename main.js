
function p(a){

    console.log(a);
}
class Node {
    constructor(value) {

        this.value=value
        this.next=null

    }

}


class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {//display the top element

        console.log(this.top);
    }

    push(value) {

        let newNode = new Node(value);

        if (!this.length){
            this.top = newNode;
            this.bottom = newNode;
        }else{

            newNode.next = this.top
            this.top = newNode;
        }
        this.length++

    }

    pop() {

        if (!this.length){console.log('😭');}

        this.length--

        if (!this.length){
            this.top = null;
            this.bottom = null;

        }

        this.top = this.top.next;





    }

    // isEmpty
}


let robin = new Stack();

robin.peek();

robin.push("aaaaa");

robin.peek();
robin.push("bbbbb");
robin.push("ccccc")
robin.push("ddddd")

robin.pop();

p(robin)