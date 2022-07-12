
var cardsDiv=document.querySelector("#cards");
var currentUserName="";

function getUserName(element){
    console.log(element.value);
    currentUserName=element.value;
}

function makeCoderCard(data){
    var res = '${data.id}';
    
    
    /* '<div class="card">
                <img src= $.
                </div> 
    '; */

    
    return res;
    /* console.log(res); */
}


async function search(){
    var response=await fetch("https://api.github.com/users/" + currentUserName);
    var coderData=await response.json();
    console.log(coderData);
    cardsDiv.innerHTML=makeCoderCard(coderData);
}

console.log(currentUserName);
