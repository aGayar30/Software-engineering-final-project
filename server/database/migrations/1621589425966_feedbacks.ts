import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Feedbacks extends BaseSchema {
    protected tableName = 'feedbacks'

    public async up() {
        this.schema.createTable(this.tableName, table => {
            table.increments('id')
            table.integer('session_id').references('id').inTable('sessions')
            table.text('content').notNullable()
            table.boolean('seen').defaultTo(false)
            table.timestamps(true)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
