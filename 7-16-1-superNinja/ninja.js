class Ninja{
    constructor(nombre,salud,velocidad,fuerza){
        this.nombre=nombre;
        this.salud=salud;
        this.velocidad=3,
        this.fuerza=3;
    }

    sayName(){
        console.log(this.nombre);
    }

    showStats(){
        console.log(this.nombre, this.salud, this.velocidad,this.fuerza);
    }

    drinkSake(){this.salud+=20;}
}

/* const ninja1 = new Ninja("Hyabusa","pretty great");
ninja1.sayName();
ninja1.showStats(); */


/* .    .   .   .   .   .   sensei */

class sensei extends Ninja{
    constructor(sabiduria){
        super("Herbert",15)
        this.sabiduria=10;
    }
    
    speakWisdom(){
        super.drinkSake();
        console.log(this.salud);
    }

}

const sensei1=new sensei("ksjsk"); 

console.log(sensei);                    /* [class ... extends ....] */
console.log(sensei1);                   /* sensei {nombre, salud, velocidad, y fuerza...} */

sensei1.sayName();                      /* Herbert */

console.log(sensei1.salud);                   /* 15 */
/* console.log(sensei1.sabiduria);    */      /* 10 */

console.log("speak wisdom is.... ");           

sensei1.speakWisdom();

console.log(sensei1.salud);             /* 35 */

