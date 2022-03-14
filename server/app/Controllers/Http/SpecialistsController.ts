import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AddAvailableIntervalValidator from "App/Validators/AddAvailableIntervalValidator";
import AvailableInterval from "App/Models/AvailableInterval";
import Session from "App/Models/Session";
import DoctorUpdateSessionStatusValidator from "App/Validators/DoctorUpdateSessionStatusValidator";

export default class SpecialistsController {
    public async addAvailableInterval({ request, response }: HttpContextContract) {
        const { specialistId, from, to } = await request.validate(new AddAvailableIntervalValidator())
        const interval = await AvailableInterval.create({ specialistId, from, to })
        response.status(201).json({ interval })
    }

    public async getSessions({ params }: HttpContextContract) {
        const id = params.id
        const sessions = await Session.query().where('doctor_id', id)
        return { sessions }
    }

    public async updateSessionStatus({request}: HttpContextContract) {
        const { session_id, new_status } = await request.validate(new DoctorUpdateSessionStatusValidator())
        const session = await Session.query().where('id', session_id).firstOrFail()
        session.status = new_status
        await session.save()
        return { operation: 'update', session }
    }
}
