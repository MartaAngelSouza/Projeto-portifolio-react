const express = require("express"); // chamar a bliblioteca express
const path = require("path"); //bibliote que ja esta no mode-modules, define o caminho absoluto
require("dotenv"); //Para usar variável de ambiente

const app = express(); // colocar a biblioteca no app

app.use(express.static(path.resolve() + "/www")) // define a pasta estatica, fica disponivel no servidor

app.get("/", function(requisicao, resposta){ //cria um retorno para o servidor
    resposta.sendFile(path.resolve() + "/www/index.html") // retorna o arquivo para o caminho "/www"
})
const port = process.env.PORT || 3003
app.listen(port, function(){
    console.log('Meu servidor esta ligado! http://localhost:"' + port)
})