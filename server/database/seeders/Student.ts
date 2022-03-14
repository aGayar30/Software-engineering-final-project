import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Student from 'App/Models/Student'

export default class StudentSeeder extends BaseSeeder {
    public async run() {
        for (let i = 1; i <= 5; i++) {
            await Student.create_(
                `firstname${i}`,
                `lastname${i}`,
                `password${i}`,
                `major${i}`,
                `${i}`
            )
        }
    }
}
