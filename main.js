

function p(a){

    console.log(a);
}



class doublelinkedList{

    constructor(value){

        this.head = {
            value : value,
            next : null,
            prev : null
        }

        this.tail = this.head;

        this.lenght = 1;
    }


    append(value){

        this.tail.next = {
            value : value,
            next : null,
            prev : this.tail
        }

        this.tail = this.tail.next;

        this.lenght++;

    }

    shift(value){

        let node = {
            value:value,
            next:this.head,
            prev:null
        }


        this.head = node;

        this.lenght++;


    }

    insert(value,index){

        let currentNode = this.head;


        for (let i = 0; i != index;i++){

            currentNode = currentNode.next;

        }


        let node = {
            value : value,
            next:currentNode.next,
            prev : currentNode
        }


        currentNode.next = node;


        this.lenght++;



    }



    remove(index){

        let currentNode = this.head;


        for (let i = 0; i != index;i++){

            currentNode = currentNode.next;

        }


        currentNode.next = currentNode.next.next;
        currentNode.next.prev = currentNode;


        this.lenght--;



    }





    printAll(){

        let CurrentNode = this.head


        while (CurrentNode){

            console.log(CurrentNode.value);

            CurrentNode = CurrentNode.next;


        }



    }


    printAllbackward(){

        let CurrentNode = this.tail


        while (CurrentNode){

            console.log(CurrentNode.value);

            CurrentNode = CurrentNode.prev;


        }



    }
}

let robin = new doublelinkedList(1);

robin.append('aa')
robin.append('bb')
robin.append('bb')
robin.append('bb')
robin.append('cc')


robin.shift('💀💀💀')

robin.insert('🤞🤞🤞🤞',3)
robin.insert('🤞🤞',3)

robin.printAll();


p("fsdffzeafzafzef")
robin.remove(4);

robin.printAll();
p(robin)

p('---------------------------')

robin.printAllbackward();