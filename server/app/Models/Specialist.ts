import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import AvailableInterval from "App/Models/AvailableInterval";
import Session from "App/Models/Session";

export default class Specialist extends BaseModel {
    @column({ isPrimary: true, serializeAs: null })
    public id: number

    @column()
    public userId: number

    @column()
    public specialistId: number

    @column()
    public type: string

    @column.dateTime({ autoCreate: true, serializeAs: null })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
    public updatedAt: DateTime

    // relationships
    @belongsTo(() => User)
    public user: BelongsTo<typeof User>

    @hasMany(() => AvailableInterval, { localKey: 'userId' })
    public availableIntervals: HasMany<typeof AvailableInterval>

    @hasMany(() => Session, { localKey: 'userId' })
    public sessions: HasMany<typeof Session>

    // custom queries
    public static async create_(firstname, lastname, password, type) {
        const user = await User.create({ firstname, lastname, password })
        await user.related('specialist').create({
            userId: user.id,
            type,
        })
        await user.load('specialist')
        return user
    }
}
