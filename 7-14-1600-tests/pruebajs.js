let pp=document.getElementById("hello");
let colorBlue=document.getElementById("colorBlue");
let btnBlue=document.getElementById("btnBlue");

console.log(pp);

function printingAA(){
    console.log('aaas');
}

function printHello(){
    console.log('gg');
}

function backColor(){
    console.log('backColor');
    console.log(colorBlue);
    colorBlue.style.backgroundColor="red ";
}

btnBlue.onclick=function(){
    backColor();
}

