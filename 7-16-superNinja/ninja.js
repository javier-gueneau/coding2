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

    drinkSake(){salud+=10;}
}

const ninja1 = new Ninja("Hyabusa","pretty great");
ninja1.sayName();
ninja1.showStats();

