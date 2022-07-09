
/* .    .   .   1 ALWAYS HUNGRY :) */

var newArray=[];

function alwaysHungry(arr){
    for (i=0;   i<arr.length   ;   i++){
       
        if(arr[i]=="comida"){
            newArray.push("delicioso");
        }
        else{
            newArray.push(arr[i]);
        } 
    }

    for (i=0;   i<arr.length   ;   i++){
        if(arr[i]=="comida"){
            console.log(newArray);
            break;
        }
        else{
            console.log('Tengo hambre');
            break;
        }
    }
}
        
/* alwaysHungry([2, 5, 22, "porotos", "zapallo"]); */


/* .    .   .   .   2- HIGH PASS FILTER - 2 */

function highPass(arr, cutoff){
    var filteredArr=[];

        for(var i=0     ;   i<arr.length    ;       i++){
            if(arr[i]>cutoff){
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
}

/* var result=highPass([2,3,8,12,15,7,6,4,2,4,4,4,4,4,4,1,1,1,6,6,6,6], 3);
console.log(result); */


/* .    .   .   3- BETTER THAN AVG :) :)  */


function betterThanAverage(arr){
    var sum=0;

    for(var i=0     ;   i<arr.length    ;       i++){
        sum=sum+arr[i];
    }

    var avg=(sum/arr.length);

    console.log('Avg: ' +avg);
    var count=0;

    for(var i=0     ;   i<arr.length    ;       i++){
        if(arr[i]>avg){
            count=count+1;
        }
    }

    return count;
}



/* var result=betterThanAverage([3,7,12,45,3,57,25,2]); */
/* console.log('Result: ' +result);  */



/* .    .   .   .   4 REVERSE , ARREGLO INVERTIDO */
/* console.log('. . . . aqui empieza numero 4 ' );  */


var temp=[];

function reverse(arr) {
    for(var i=arr.length-1     ;   i>-1   ;       i--){
        temp.push(arr[i]);

    }
    
    arr=temp;

    return arr;
}

//var result = reverse(["chicago", "santiago", "dc", "san francisco", "dallas"]);
//console.log(result);



//. .   .   .   .   .   5 FIBONACCI ARRAY


function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];

    for(    i=2     ;       i<n     ;       i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2]);
    }

    
    // tu código aquí
    return fibArr;
}
   
var result = fibonacciArray(15);
console.log(result);
