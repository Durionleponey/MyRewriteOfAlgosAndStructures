


class array{
    constructor(){

        this.length = 0;
        this.data = {};
    }

    append(value){

        this.data[this.length] = value;
        this.length++;

    }

    push(value){

        for (let i = this.length-1; i >= 0; i--){


            this.data[i+1] = this.data[i];

        }

        this.data[0] = value;

        this.length++;


    }

    insert(value,index){

        for (let i = this.length-1; i >= index; i--){


            this.data[i+1] = this.data[i];

        }

        this.data[index] = value;

        this.length++;


    }

    remove(index){

        for (let i = index; i < this.length-1; i++){


            this.data[i] = this.data[i+1];

        }

        delete this.data[this.length - 1];



        this.length--;


    }

    printByIndex(index){

        console.log(this.data[index]);
    }


    printAll(){

        for (let i =0; i< this.length; i++){

            console.log(i + ': [' + this.data[i] + ']');
        }
    }


}



robin = new array();

robin.append("pommes")
robin.append("poires")


//robin.printAll();


robin.push("lol");

robin.printAll();



console.log("inserct abricot at 2");
robin.insert("abricot",2)
robin.printAll();

console.log("remove avvricot");
robin.remove(2)

robin.printAll();


console.log(robin);