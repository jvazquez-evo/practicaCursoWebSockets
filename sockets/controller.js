

const socketController = socket => {


    console.log('Cliente conectado', socket.id)

    socket.on('disconnect', () => {
        console.log ('Cliente desconecatdo')
    })

    socket.on('enviar-mensaje', (payload, callback) =>
    {
        const id = '123456';
        callback (id)
        // this.io.emit('enviar-mensaje',  'desde el servidor')

        socket.broadcast.emit ('enviar-mensaje', payload)
    })
}

module.exports = {
    socketController
}