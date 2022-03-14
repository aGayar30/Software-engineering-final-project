import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'
import Student from 'App/Models/Student'
import AvailableInterval from 'App/Models/AvailableInterval'
import { DateTime } from 'luxon'
import Session from 'App/Models/Session'

test.group('ORM Models', group => {
    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })

    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })

    test('ensure student create_() method works', async assert => {
        const student = await Student.create_(
            'firstname_test',
            'lastname_test',
            'password_test',
            'testing',
            '4'
        )
        if (student) assert.isTrue(student.$isPersisted ?? false)
        else assert.fail()
    })

    test('ensure available intervals create', async assert => {
        const interval = await AvailableInterval.create({
            specialistId: 6,
            from: DateTime.fromISO('2021-05-21T01:00'),
            to: DateTime.fromISO('2021-05-21T03:00'),
        })
        assert.isTrue(interval.$isPersisted)
    })

    test('ensure sessions model creation works', async assert => {
        const session = await Session.create({
            from: DateTime.now(),
            to: DateTime.now().plus({ hours: 2 }),
            type: 'online-meeting',
            studentId: 1,
            specialistId: 7,
        })
        assert.isTrue(session.$isPersisted)
    })
})
