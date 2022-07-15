/* .    .   .   hoisting o elevacion */


/* .    ejercicio1 */


/* console.log(hello);  UNDEFINED */
/* var hello='world';
console.log(hello); */


/* predicción
'world' */

                        /* .    ejercicio2 */

/* var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
} */


/* prediccion
'magnet'
*/

                         /* .    .   ejercicio3 */


/* var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan); */


/* prediccion
'super cool' */

            /* .    .   .   ej4 */



/* var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
} */


/* ej4 predicción
'chicken'
'halfchicken' */


/* .    .   .   eje5 */


/* var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
mean();
console.log(food);
console.log(food); */


/* ej5  prediccion
'chicken'
'fish'
cae */

/* .    .   eje6 */


var genre = "disco";
console.log(genre);
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
rewind();
console.log(genre);

/* ej6 prediccion
'disco'
'rock'
'rb'
'disco' */


/* .    .   .   ej7 */


/* dojo = "san jose";
console.log(dojo);
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
learn();
console.log(dojo); */

/* predicc:
san jose
seattle
burbank 
san jose  */


/* .    .   .   BONUS-8 ES6 - CONST */


function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
    console.log(makeDojo("Chicago", 65));
    console.log(makeDojo("Berkeley", 0));


    /* BONUS 8 prediccion */
    
/* con 'const' se cae por supuesto (No se puede re-definir constante) */
// prediccion,
/* {chicago, 65, TRUE }
'closed for now' */



        
