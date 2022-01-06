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

    app.patch('/atendimentos/:id', (req, res) => {
        
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.atualizar(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })
}