const fs = require('fs')


fs.createReadStream('./assets/dog1.jpg')
    .pipe(fs.createWriteStream('./assets/dog2.jpg'))
    .on('finish', () => { console.log('Imagem escrita com sucesso!!!')})