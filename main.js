



class Node{
    constructor(data){
        this.data = data;
        this.left=null
        this.right=null

    }
}

class bst{
    constructor(){
        this.root=null
    }
    add(value){


        if (!this.root){
            this.root = new Node(value);
            return value;
        }

        let currentNode = this.root;

        while(1){

            if (currentNode.data>value){


                if (!currentNode.left){
                    currentNode.left = new Node(value);
                    return value;
                }

                currentNode = currentNode.left;
            }else{

                if (!currentNode.right){
                    currentNode.right = new Node(value);
                    return value;
                }

                currentNode = currentNode.right;

            }
        }
    }

    remove(value){//not 100% opti and clean and with no edge case but still

        let currentNode = this.root;

        let currentNodeParent = null

        let nodeExtermeLeftParent = null;

        while(true){

            if (currentNode.data === value){

                //console.log("target is found");
                let target = currentNode;

                //find the closest number to the exterm left i guess

                while(currentNode.left){

                    nodeExtermeLeftParent = currentNode;
                    currentNode = currentNode.left;

                }

                //change links between target and currentNode

                try{
                    nodeExtermeLeftParent.left = null;


                }catch(e){}

                currentNode.left = target.left;
                currentNode.right = target.right;


                if (currentNodeParent.left === target){
                    currentNodeParent.left = null;
                }

                if (currentNodeParent.right === target){
                    currentNodeParent.right = null;
                }

                return target;


            }else{
                //searching the target

                currentNodeParent = currentNode;

                if (currentNode.data > value){
                    currentNode= currentNode.left;
                }else{
                    currentNode = currentNode.right;
                }
            }


        }
    }
}

let robin =new bst();

robin.add(5)

robin.add(4)

robin.add(3)

robin.add(5.5)

robin.add(4.5)

robin.add(6)
robin.add(9)
console.log(JSON.stringify(robin, null, 2));
console.log("REMOVING 3---------------------------------");
robin.remove(3)
console.log(JSON.stringify(robin, null, 2));