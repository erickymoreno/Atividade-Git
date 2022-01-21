const express = require('express')
const pessoas = require('./pessoasRoute')
const niveis = require('./niveisRoute')
const turmas = require('./turmasRoute')


module.exports = app => {
    app.use(
        express.json(),
        express.urlencoded({ extended: false }),
        pessoas,
        niveis,
        turmas
    )
}