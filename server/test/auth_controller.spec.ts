import test from 'japa'
import Database from '@ioc:Adonis/Lucid/Database'
import { GetResponse } from './test_utils'


test.group('Auth Controller', group => {
    group.beforeEach(async () => {
        await Database.beginGlobalTransaction()
    })

    group.afterEach(async () => {
        await Database.rollbackGlobalTransaction()
    })

    test('ensure student log in endpoint working fine', async (assert) => {
        const response = await GetResponse({
            method: 'POST',
            url: '/auth/login',
            data: {
                id: '1',
                password: "password1"
            }
        })
        assert.equal(response.status, 200)
    })

    test('ensure doctor log in endpoint working fine', async (assert) => {
        const response = await GetResponse({
            method: 'POST',
            url: '/auth/login',
            data: {
                id: '6',
                password: "password1"
            }
        })
        assert.equal(response.status, 200)
    })
})
