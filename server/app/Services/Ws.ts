import socketIo from 'socket.io'
import Server from '@ioc:Adonis/Core/Server'
import Logger from '@ioc:Adonis/Core/Logger'

class Ws {
    public isReady = false
    public io: socketIo.Server

    public async start() {
        this.io = new socketIo.Server(Server.instance!, {
            cors: {
                origin: '*',
            },
        })

        // new socket connection event
        this.io.on('connection', async socket => {
            Logger.info(`new connection: ${socket.id}`)

            // socket events
            socket.on('disconnect', () => {
                Logger.info('socket disconnected')
            })
        })
        this.isReady = true
        Logger.info('socket is ready')
    }
}

// This makes the service a singleton
export default new Ws()
