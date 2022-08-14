const express = require("express");

require("./config/mongoose.config");

const app = express();
const port=8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const AllJokeRoutes=require('./routes/joke.routes');
AllJokeRoutes(app);


app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}! : bnb.`)
);

