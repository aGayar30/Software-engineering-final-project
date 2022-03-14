import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Specialist from 'App/Models/Specialist'

export default class DoctorSeeder extends BaseSeeder {
    public async run() {
        // for (let i = 1; i <= 5; i++) {
        //     await Specialist.create_(
        //         `firstname${i}`,
        //         `lastname${i}`,
        //         `password${i}`,
        //         i % 2 === 0 ? 'life-coach' : 'psychiatrist'
        //     )
        // }

        await Specialist.create_('Dr Mohamed', 'Samy', 'password1', 'psychiatrist')
        await Specialist.create_('Dr Ahmed', 'Hamdy', 'password2', 'life-coach')
        await Specialist.create_('Dr Mohamed', 'Abdelqader', 'password3', 'life-coach')
        await Specialist.create_('Dr Sarah', 'Amr', 'password4', 'psychiatrist')
    }
}
