import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class AvailableInterval extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public specialistId: number

    @column()
    public from: DateTime

    @column()
    public to: DateTime
}
