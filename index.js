require('dotenv').config()
const http = require('http')

function verificarSiLlegoRespuesta(){
    console.log("el proyeto si esta corriendo")
}

const server = http.createServer(verificarSiLlegoRespuesta())
const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("la aplicaciono es corriendo el el puerto ", PORT)
})