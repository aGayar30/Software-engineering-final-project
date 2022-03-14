import BaseSchema from '@ioc:Adonis/Lucid/Schema'
import {DateTime} from "luxon";

export default class Students extends BaseSchema {
    protected tableName = 'students'

    public async up() {
        this.schema.createTable(this.tableName, table => {
            table.increments('id')
            table.string('major').nullable()
            table.string('year').nullable()
            table.dateTime('reminder_start_date').defaultTo(DateTime.now().toString())

            table
                .integer('user_id')
                .unique()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
            table.timestamps(true)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
