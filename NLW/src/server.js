const express = require("express")
const server = express()

//configurar pasta publica
server.use(express.static("nlw/public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("nlw/src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da minha aplicação
//pagina inicial
//req: requisição res:resposta

// server.get("/", (req, res) =>{
//     res.render(__dirname + "/views/index.html")
// })

server.get("/", (req, res) =>{
    return res.render("index.html", { title: "Um título"})
})

server.get("/search-results", (req, res) =>{
    return res.render("search-results.html")
})

server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})

//ligar o servidor

server.listen(3300)