const express = require("express");

require("./config/mongoose.config");

const app = express();
const port=8000;

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const AllUserRoutes=require('./routes/user.routes');
AllUserRoutes(app);


app.listen(port, () =>
  console.log(`Server is locked and loaded on port ${port}! : bnb.`)
);

