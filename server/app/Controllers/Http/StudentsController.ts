import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Specialist from "App/Models/Specialist";
import AvailableIntervals from "App/Models/AvailableInterval"
import SessionCreateValidator from "App/Validators/SessionCreateValidator";
import Session from "App/Models/Session";
import Feedback from "App/Models/Feedback"

export default class StudentsController {
    public async getAvailableIntervals () {
        const doctors = await Specialist.query().preload('availableIntervals').preload('user')
        return { doctors }
    }

    public async getDoctorIntervals({ params }: HttpContextContract) {
        const { id } = params
        const doctorIntervals = await AvailableIntervals.query().where('specialistId', id)
        return { intervals: doctorIntervals }
    }

    public async getNewFeedbacks() {
        const feedbacks = await Feedback.query().where('seen', false)
        return { feedbacks }
    }

    public async getAllFeedbacks() {
        const feedbacks = await Feedback.query()
        return { feedbacks }
    }

    public async getDoctorDetails({ params }: HttpContextContract) {
        const { id } = params
        const doctor = await Specialist.query().where('user_id', id).preload('user').firstOrFail()
        return { doctor }
    }

    public async createSession ({ request, response }: HttpContextContract) {
        const { from, to, type, specialistId, studentId } = await request.validate(new SessionCreateValidator())
        const session = await Session.create({ from, to, type, specialistId, studentId })
        response.status(201).json({ session })
    }

    public async getSessions({ params }) {
        const id = params.id
        const sessions = await Session.query().where('student_id', id).preload('specialist', specialistQuery => specialistQuery.preload('user'))
        return { sessions }
    }
}
