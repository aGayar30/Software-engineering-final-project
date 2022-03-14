import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sockets extends BaseSchema {
    protected tableName = 'sockets'

    public async up() {
        this.schema.createTable(this.tableName, table => {
            table.increments('id')
            table.integer('user_id').references('id').inTable('users')
            table.string('socket_id').notNullable().unique()
            table.timestamps(true)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
