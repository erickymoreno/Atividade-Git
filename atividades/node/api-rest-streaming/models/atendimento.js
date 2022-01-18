const conexao = require('../infraestrutura/conexao')
const moment = require('moment')
const axios = require('axios')

class Atendimento {

    adicona(atendimento, res) {

        const dataCriacao = moment().format('YYYY-MM-DD HH:mm:ss')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss')

        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length > 4

        const validacoes = [
            {
                nome: 'date',
                valido: dataEhValida,
                mensagem: 'A data deve ser maior ou igual a data atual'

            },
            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'O nome do cliente deve conter mais do que cinco letras'
            }
        ]


        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if (existemErros) {
            res.status(400).json(erros)
        } else {
            const atendimentoDatado = { ...atendimento, dataCriacao, data }
            const sql = 'INSERT INTO atendimentos SET ?'

            conexao.query(sql, atendimentoDatado, (erro, resultado) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultado)
                }
            })
        }
    }

    lista(res) {
        const sql = 'SELECT * FROM  atendimentos'

        conexao.query(sql, (erro, resultado) => {
            if (erro) {
                res.satus(400).json(erro)
            } else {
                res.status(200).json(resultado)
            }
        })
    }

    listaPorId(id, res) {
        
        const sql = `SELECT * FROM Atendimentos WHERE id=${id}`
        
        conexao.query(sql, async (erro, resultados) => {
            
            const atendimento = resultados[0]
            const cpf = atendimento.cliente
            
            if (erro) {
                res.status(400).json(erro)
            } else {
                const { data } = await axios.get(`http://localhost:8082/${cpf}`)
               
                atendimento.cliente = data

                res.status(200).json(atendimento)
            }
        })
    }

    atualizar(id, valores, res) {

        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }

        const sql = 'UPDATE Atendimentos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM Atendimentos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
}

module.exports = new Atendimento