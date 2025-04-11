const { TicketControl } = require("../models/ticket-contro")

const ticketControl = new TicketControl

const socketController = (socket) => {
    
    socket.on('siguiente-ticket', (payload, callback) => {
        const siguiente = ticketControl.siguiente ();   
        callback (siguiente)    

        // Notifica el nuevo ticket pendiente de asignar
    });

}


module.exports = {
    socketController
}