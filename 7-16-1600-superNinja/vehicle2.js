// clase principal de Vehicle 
class Vehicle {
    constructor(manufacturer, model, color) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive() {
        this.miles += 10;
        console.log(`You drove your ${ this.constructor.name } and it now has ${this.miles} miles on it.`);
    }
    // método simple de la clase
    parentFunction(){
        return "This is coming from the parent!";
    }
}



/* clase hijo   .   .   .    */ // clase M5 hijo



class M5 extends Vehicle {
    constructor(color) {
        super("BMW", "M5", color);
    }
    //funcion simple de la clase hijo
    childFunction() {
        // usando super, podemos llamar el método adre
        const message = super.parentFunction();
        console.log(message);
    }
}
const m5 = new M5("Blue");
m5.childFunction();


/*  .   .   .   explorando */


console.log(m5);                /* M5 {..... .. . } */

console.log(Vehicle);           /* [class vehicle] */

console.log(Vehicle.drive);     /* undefined */

/* Vehicle.drive(); */

m5.childFunction();

m5.drive();