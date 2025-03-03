const express = require("express")
const app = express()

app.use(express.static(__dirname + '/public'));


app.get("/api/clicked", (req, res, next) => {
    res.send(`<img src='/Eu.png' alt='Image>`);
})

app.listen(3000, () => {
    console.log("Servidor a correr em http://127.0.0.1:3000")
})
