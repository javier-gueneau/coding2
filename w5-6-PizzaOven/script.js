
function pizzaOven(tipoCorteza, tipoSalsa, queso, salsas){
    var pizza={};
    pizza.tipoCorteza=tipoCorteza;
    pizza.tipoSalsa=tipoSalsa;
    pizza.queso=queso;
    pizza.salsas=salsas;
    
    console.log(pizza);
    return pizza;
    
}

var pizza1=pizzaOven("estilo Chicago", "tradicional", ["mozarella"], ["pepperoni", "salchicha"])

var pizza2=pizzaOven("lanzada a Mano", "marinara", ["mozarella","feta"], ["champiñones","aceitunas","cebollas"])

var pizza3=pizzaOven("Masa delgada", "blanca", ["cheddar"], ["pimenton rojo","pimentón verde"])

var pizza4=pizzaOven("Cuatro Quesos", "roja", ["mozarella","gauda","cheddar","roquefort"], ["roja"])
