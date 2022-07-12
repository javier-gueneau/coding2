
/* .    .   1- IMPARES */


function impares(){
    var impar=[];
    for(var i=1; i<21; i++){
        if(i%2==1){
            impar.push(i);
            
        }
        /* else {console.log("h");
        } */
    }
    console.log(impar);
}

/* impares(); */


/* .    .   2- DIVISIBLES POR 3 */


function divisiblesPor3(){
    var divisiblesPor3=[];
    for(var i=100; i>-1; i--){
        if(i%3==0){
            divisiblesPor3.push(i);
        }
    }
    console.log(divisiblesPor3);
}

/* divisiblesPor3(); */


/* .    .   3- IMPRIME LA SECUENCIA */


function imprimeSecuencia(){
    var secuencia=[];
    for(var i=4; i>=-3.5; i=i-1.5){
        secuencia.push(i);
    }
    console.log(secuencia);
}

/* imprimeSecuencia(); */
    

/* 4- sigma  */


function sigma(){
    var sum=0;
    for (var i=1; i<101; i++){
        sum+=i;
    }
    console.log(sum);
}

/* sigma(); */


/* .    .   5-factorial */

function factorial(){
    var product=1;
    for (var i=1; i<13; i++){
        product=product*i;
    }
    console.log(product);
}

factorial();
