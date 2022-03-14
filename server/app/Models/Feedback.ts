import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Feedback extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public session_id: number

    @column()
    public content: string

    @column()
    public seen: boolean

    @column.dateTime({ autoCreate: true })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true })
    public updatedAt: DateTime
}
