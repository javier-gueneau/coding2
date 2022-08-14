const Joke=require('../models/joke.model');

//listar
module.exports.findJokes=(req,res)=>{
    console.log(req.body)
    Joke.find()
    .then(allUsers=>res.json({users:allUsers}))
    .catch((err)=>res.json({error:err}))
}

//BUSCAR
module.exports.lookUp=(req,res)=>{ 
    Joke.findById(req.params.id)
    .then(data=>{
        res.json({data:data})
    }).catch(error=>{
        res.status(500).json({mensaje:error})
    })
}

//crear
module.exports.createNewJoke=(req,res)=>{
    console.log(req.body)
    Joke.create(req.body)
    .then((newJoke) =>res.json({joke:newJoke}))
    .catch((err)=>res.json({error:err}))
    /* res.json({msg:'okay, user created'}) */
    
}

//ACTUALIZAR
module.exports.update=(req,res)=>{ 
    Joke.findByIdAndUpdate(req.params.id, req.body)
    .then(data=>{
        res.json({data:req.body})
    }).catch(error=>{
        res.status(500).json({mensaje:error})
    })
}

//ELIMINAR
module.exports.delete=(req,res)=>{ 
    Joke.findByIdAndDelete(req.params.id)
    .then(data=>{
        res.json({mensaje:'elemento eliminado'})
    }).catch(error=>{
        res.status(500).json({mensaje:error})
    })
}
