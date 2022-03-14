import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import Student from "App/Models/Student";
import {column, beforeSave, BaseModel, belongsTo, BelongsTo, HasOne, hasOne} from '@ioc:Adonis/Lucid/Orm'
import Specialist from "App/Models/Specialist";

export default class User extends BaseModel {
    @column({ isPrimary: true })
    public id: number

    @column()
    public firstname: string

    @column()
    public lastname: string

    @column({ serializeAs: null })
    public password: string

    @column()
    public rememberMeToken?: string

    @column.dateTime({ autoCreate: true, serializeAs: null })
    public createdAt: DateTime

    @column.dateTime({ autoCreate: true, autoUpdate: true, serializeAs: null })
    public updatedAt: DateTime


    @hasOne(() => Student)
    public student: HasOne<typeof Student>

    @hasOne(() => Specialist)
    public specialist: HasOne<typeof Specialist>

    // hooks
    @beforeSave()
    public static async hashPassword(user: User) {
        if (user.$dirty.password) {
            user.password = await Hash.make(user.password)
        }
    }
}
