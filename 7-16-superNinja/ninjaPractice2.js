class ninja{
    constructor(nombre,address){
        this.nombre=nombre;
    }
}

const monk=new ninja("johny","110 blue st");

console.log(monk.nombre);


class xWarrior extends ninja{constructor(agent){super("this is super")}}

const DrBelt=new xWarrior("dr Belt")

console.log(xWarrior);
console.log(xWarrior.value);
console.log(xWarrior.nombre);
console.log(DrBelt);
console.log(DrBelt.nombre);
console.log(DrBelt.agent);

