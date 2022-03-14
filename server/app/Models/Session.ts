import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import Student from "App/Models/Student";
import Specialist from "App/Models/Specialist";

export default class Session extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public from: DateTime

    @column()
    public to: DateTime

    @column()
    public type: string

    @column()
    public status: string

    @column()
    public studentId: number

    @column()
    public specialistId: number

    // relationships
    @belongsTo(() => Student, { localKey: 'studentId' })
    public student: BelongsTo<typeof Student>

    @belongsTo(() => Specialist, { localKey: 'userId', foreignKey: 'specialistId' })
    public specialist: BelongsTo<typeof Specialist>

    @column.dateTime({ autoCreate: true, serializeAs: null })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
    public updatedAt: DateTime
}
