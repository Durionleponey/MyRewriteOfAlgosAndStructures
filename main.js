
function p(a){

    console.log(a);
}

class Node{

    constructor(value) {

        this.value = value;
        this.next = null;
    }

}



class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {

        console.log(this.first);
    }

    enqueue(value){

        const newNode = new Node(value)


        if(!this.length){

            this.first = newNode;
            this.last = newNode;

        }else{

            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;

    }

    dequeue(){

        this.length--;

        if(!this.length){

            this.first = null;
            this.last = null;

        }else{


            this.first = this.first.next;
        }





    }

}


let robin = new Queue();

robin.peek();

robin.enqueue("aaaaa");

robin.peek();
robin.enqueue("bbbbb");
robin.peek();
robin.enqueue("ccccc")
robin.peek();
robin.enqueue("ddddd")


p(robin)

robin.dequeue()
robin.dequeue()


p(robin)