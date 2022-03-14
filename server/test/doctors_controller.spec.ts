import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'
import { GetResponse } from './test_utils'
import { DateTime } from 'luxon'

test.group('Doctors Controller', group => {
    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })

    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })

    test('ensure add available interval endpoint working', async assert => {
        const response = await GetResponse({
            method: 'POST',
            url: '/doctor/add-interval',
            data: {
                specialistId: 14,
                from: DateTime.fromISO('2021-10-21T05:00'),
                to: DateTime.fromISO('2021-10-21T07:00'),
            },
        })
    })
})
