import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UserLoginValidator {
    constructor(protected ctx?: HttpContextContract) {}

    public schema = schema.create({
        id: schema.string({ trim: true }, [
            rules.exists({ table: 'users', column: 'id' }),
        ]),
        password: schema.string({ trim: true }),
    })

    public messages = {}
}
