const express = require("express");
const app = express();
const port = 8000;
    
// req es la abreviatura para request
// res es la abreviatura para response
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );no