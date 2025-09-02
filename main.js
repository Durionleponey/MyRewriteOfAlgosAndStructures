let list = [2,1321231244,114,5,4,48,5,65,11,13231];

console.log("Avant tri :", list);



function bubbleSort(list){

    let c =0

    while(true){
        c++


        for (let i = 0; i < list.length; i++) {

            let temp = 0


            if (list[i] > list[i+1]){

                temp = list[i];
                list[i] = list[i+1];
                list[i+1] = temp;

            }


        }

        if (c> list.length){break}



    }



}


bubbleSort(list);

console.log("après tri :", list);


