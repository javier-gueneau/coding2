const JokeController=require('../controllers/joke.controllers');

module.exports=app=>{
    app.post('/api/joke/create', JokeController.createNewJoke)
    app.get('/api/joke/all', JokeController.findJokes)
    app.get('/api/joke/:id', JokeController.lookUp)
    app.put('/api/joke/:id', JokeController.update)
    app.delete('/api/joke/:id', JokeController.delete)
}