
var sandwich1={
    bread:"wheat",
    proteins:["london broil","bacon"],
    cheeses:["provolone","pepperjack"],
    condiments:["aragula","tomatoes","mayo"],
    
    display: function(){
        console.log('The bread is:       ' +this.bread);
        console.log('The proteins are:   ' +this.proteins);
        console.log('The cheese is:      ' +this.cheeses);
        console.log('The condiments are: ' +this.condiments);
    }

}

/* console.log(sandwich1.bread); */
sandwich1.display()

