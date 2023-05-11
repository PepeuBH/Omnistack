const connection = require('../database/connection'); //importa o BD para ser usado

module.exports = {
    async create(request, response) {
        const { title, description, value } = request.body;
        const ong_id = request.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        response.json({ id });
    },

    //função para listar todos os casos 
    async list(request, response) {
        const incidents = await connection('incidents').select('*'); //seleciona todas os casos do BD

        return response.json(incidents);
    },


    //função para deletar o caso de uma ong
    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization //para prevenir que uma ong delete o caso de outra

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id != ong_id) { //verifica se foi passado o id do caso é o id da ong que possui este caso
            return response.status(401).json({ error: 'Operção não permitida.' });//mostra erro se for diferente
        }

        await connection('incidents').where('id', id).delete(); //caso o ID seja coerente, deleta o caso

        return response.status(204).send(); //retorna mensagem de sucesso

    }
}