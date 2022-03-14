import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class AvailableIntervals extends BaseSchema {
    protected tableName = 'available_intervals'

    public async up() {
        this.schema.createTable(this.tableName, table => {
            table.increments('id')
            table.integer('specialist_id').references('user_id').inTable('specialists')
            table.dateTime('from')
            table.dateTime('to')
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
