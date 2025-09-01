
function p(a){

    console.log(a);
}




class Stack{

    constructor(){

        this.data = [];

    }

    peek(){

        console.log(this.data[this.data.length-1])
    }

    push(value){
        this.data.push(value);
    }

    pop(){
        this.data.pop();
    }
}

let robin = new Stack();

robin.peek();

robin.push("aaaaa");

robin.peek();
robin.push("bbbbb");
robin.push("ccccc")
robin.push("ddddd")

robin.pop();robin.pop();

p(robin)