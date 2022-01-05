const Atendimento = require('../models/atendimento')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        Atendimento.listaPorId(id, res)
    })

    app.post('/atendimentos', (req, res) => {
        
        const atendimentos = req.body

        Atendimento.adicona(atendimentos, res)
       
    })
}