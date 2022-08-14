const User=require('../models/user.model');

//listar
module.exports.findAllUsers=(req,res)=>{
    console.log(req.body)
    User.find()
    .then(allUsers=>res.json({users:allUsers}))
    .catch((err)=>res.json({error:err}))
}

//BUSCAR
module.exports.lookUp=(req,res)=>{ 
    User.findById(req.params.id)
    .then(data=>{
        res.json({data:data})
    }).catch(error=>{
        res.status(500).json({mensaje:error})
    })
}

//crear
module.exports.createNewUser=(req,res)=>{
    console.log(req.body)
    User.create(req.body)
    .then((newUser) =>res.json({user:newUser}))
    .catch((err)=>res.json({error:err}))
    /* res.json({msg:'okay, user created'}) */
}

//ACTUALIZAR
module.exports.update=(req,res)=>{ 
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(data=>{
        res.json({data:req.body})
    }).catch(error=>{
        res.status(500).json({mensaje:error})
    })
}

//ELIMINAR
module.exports.delete=(req,res)=>{ 
    User.findByIdAndDelete(req.params.id)
    .then(data=>{
        res.json({mensaje:'elemento eliminado'})
    }).catch(error=>{
        res.status(500).json({mensaje:error})
    })
}
