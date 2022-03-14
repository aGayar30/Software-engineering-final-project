import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserLoginValidator from "App/Validators/UserLoginValidator";
import User from "App/Models/User";

export default class AuthController {
    public async login({ request, response, auth }: HttpContextContract) {
        const { id, password } = await request.validate(new UserLoginValidator())
        const token = await auth.attempt(id, password)
        const student = await User.query().has('student').preload('student').where('id', id).first()
        if (student) {
            response.status(200).json({ token, profile: student, type: 'student' })
        } else {
            const specialist = await User.query().has('specialist').preload('specialist').where('id', id).first()
            if (specialist) {
                response.status(200).json({ token, profile: specialist, type: 'specialist' })
            } else {
                response.status(401).json({ message: 'could not login, wrong credentials'})
            }
        }
    }
}
