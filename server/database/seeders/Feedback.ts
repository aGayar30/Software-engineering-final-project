import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Feedback from 'App/Models/Feedback'

export default class DoctorSeeder extends BaseSeeder {
    public async run() {
        await Feedback.create({
            session_id: 8,
            content: 'Dear student, it was a pleasure meeting you kindly stick to the next advices. Take the prescribed medicine 3 times a day, meet me the next week on tuesday at 2:00 PM, do the exercises we mentioned at the session, don\'t forget to contact me anytime'
        })
    }
}
