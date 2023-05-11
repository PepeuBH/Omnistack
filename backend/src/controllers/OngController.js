const connection = require('../database/connection') //importa o BD para ser usado
const crypto = require('crypto')


module.exports = {

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body

        const id = crypto.randomBytes(4).toString('HEX') //faz a criptografia do ID de cada ONG, crypto é uma função do próprio node

        await connection('ongs').insert({ //insere os dados na tabela ongs
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id })
    },


    async list(request, response) {
        const ongs = await connection('ongs').select('*') //seleciona todas as ongs do BD

        return response.json(ongs)
    },

};


