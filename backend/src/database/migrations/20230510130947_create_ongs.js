/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */


exports.up = function (knex) {
    return knex.schema.createTable('ongs', function (table) { //create tables in the database
        table.string('id').primary()
        table.string('name').notNullable()
        table.string('email').primary()
        table.string('whatsapp').primary()
        table.string('city').primary()
        table.string('uf', 2).primary()

    })

};




/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) { //desfazer tabela
    return knex.schema.dropTable('ongs')
};
