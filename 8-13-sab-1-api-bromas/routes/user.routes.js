const UserController=require('../controllers/user.controller'); //¿y esto por que?? ¿Qué es lo que se está importando?

module.exports=app=>{
    app.post('/api/user/create', UserController.createNewUser)
    app.get('/api/user/all', UserController.findAllUsers)
    app.get('/api/user/:id', UserController.lookUp)
    app.put('/api/user/:id', UserController.update)
    app.delete('/api/user/:id', UserController.delete)
}