const fs = require('fs')


fs.readFile('./assets/dog1.jpg',(erro, buffer) => {
    console.log('Imagem foi bufferizada com sucesso!')
    console.log(buffer)

    fs.writeFile('./assets/dog1-Copy.jpg', buffer, (erro) => { 
        console.log("Imagem escrita com sucesso!")
    })
})