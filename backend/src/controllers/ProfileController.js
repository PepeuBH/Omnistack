/**
 * Profile Controller serve para as funções de controle específicas
 * Não é recomendado criar todas as funções dentro do controller padrão 
 */

const connection = require('../database/connection'); //importa o BD para ser usado


module.exports = {
    //função parar alterar dados existentes na tabela
    async list(request, response){
        const ong_id = request.headers.authorization //para prevenir que uma ong delete o caso de outra
        const incident = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*')
            
            return response.json(incident);
    }
}