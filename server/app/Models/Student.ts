import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Session from "App/Models/Session";

export default class Student extends BaseModel {
    @column({ isPrimary: true, serializeAs: null })
    public id: number

    @column()
    public userId: number

    @column()
    public major: string

    @column()
    public year: string

    @column()
    public reminder_minute: number

    @column()
    public reminder_hour: number

    @column()
    public reminder_start_date: DateTime

    @column.dateTime({ autoCreate: true, serializeAs: null })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
    public updatedAt: DateTime

    relationships
    @belongsTo(() => User)
    public user: BelongsTo<typeof User>

    @hasMany(() => Session, { localKey: 'userId' })
    public sessions: HasMany<typeof Session>

    // custom queries
    public static async create_(firstname, lastname, password, major, year) {
        const user = await User.create({ firstname, lastname, password })
        await user.related('student').create({
            userId: user.id,
            major,
            year,
        })
        await user.load('student')
        return user
    }
}
