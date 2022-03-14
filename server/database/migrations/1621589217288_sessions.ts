import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Sessions extends BaseSchema {
    protected tableName = 'sessions'

    public async up() {
        this.schema.createTable(this.tableName, table => {
            table.increments('id')
            table.dateTime('from').notNullable()
            table.dateTime('to').notNullable()
            table.enum('type', ['online-meeting', 'face-to-face', 'chat']).notNullable()
            table.enum('status', ['pending', 'accepted', 'rejected']).defaultTo('pending')
            table.integer('student_id').references('user_id').inTable('students')
            table.integer('specialist_id').references('user_id').inTable('specialists')
            table.timestamps(true)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
