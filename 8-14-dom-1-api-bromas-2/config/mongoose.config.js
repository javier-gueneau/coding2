const mongoose =require('mongoose');

mongoose.connect('mongodb://localhost/jokes',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>console.log('Established a connection to database.') )
.catch((err)=>console.log('something went wrong , oooops') )