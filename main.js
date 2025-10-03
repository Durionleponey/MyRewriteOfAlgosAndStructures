



class BST{
    constructor(value){
        let newNode = {value:value,left:null,right:null}

        this.root = newNode
    }

    add(value){

        let newNode = {value:value,left:null,right:null}

        let currentNode = this.root

        while (true){

            if (value < currentNode.value){

                if (currentNode.left){
                    currentNode = currentNode.left

                }else{
                    currentNode.left = newNode
                    break

                }
            }else{
                if (currentNode.right){
                    currentNode = currentNode.right
                }else{
                    currentNode.right = newNode
                    break
                }


            }


        }
    }

    BFS(){
        let currentNode = this.root
        let queue = []//3,5,1,4
        let list = []//
        queue.push(currentNode)

        while (queue.length > 0){
            let temp = queue.shift()
            list.push(temp.value)

            if(temp.left){
                queue.push(temp.left)
            }
            if(temp.right){
                queue.push(temp.right)
            }

        }

        return list

    }


    DFS(){
        return DeepFirstSearch(this.root, [])
    }
}


let tree = new BST(9);

tree.add(4)
tree.add(6)
tree.add(20)
tree.add(170)
tree.add(15)
tree.add(1)

//console.log(tree.BFS())

console.log(tree.DFS())

function DeepFirstSearch(root, list){

    if(root.left){
        DeepFirstSearch(root.left, list)
    }

    list.push(root.value)

    if (root.right){
        DeepFirstSearch(root.right, list)
    }

    return list
}

console.log(tree)
console.log(JSON.stringify(tree, null, 2));

