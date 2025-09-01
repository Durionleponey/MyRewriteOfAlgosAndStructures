
function p(a){

    console.log(a);
}


//creation queue using stack

class Stack{

    constructor(){

        this.data = [];

    }

    peek(){

        console.log(this.data[this.data.length-1])
    }

    push(value){
        return this.data.push(value);
    }

    pop(){
        return this.data.pop();
    }
}



class QueueUsingStack{
    constructor(){

        this.stackIn = new Stack();
        this.stackOut = new Stack();
    }

    enqueue(value){
        this.stackIn.push(value);

    }
    dequeue(){


        if (this.stackOut.data.length === 0){

            while (this.stackIn.data.length > 0){

                this.stackOut.push(this.stackIn.pop());
            }
        }

        this.stackOut.pop();
    }
}




let robin = new QueueUsingStack();


robin.enqueue("pomme de terre");
robin.enqueue("poires");
robin.enqueue("arbre");
robin.enqueue("aaaa");
robin.enqueue("bbbbb");


p(robin);

robin.dequeue();
robin.dequeue();
robin.dequeue();

p(robin);
robin.enqueue("😨");
robin.enqueue("😅");

robin.dequeue();


p(robin)