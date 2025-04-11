const socket = io();

const lblOnline = document.getElementById ('on')
const lblOffline = document.getElementById ('off')

const txtMsg = document.getElementById ('txtMsg')
const btnEnviar = document.getElementById('btnEnviar')


socket.on('connect', () =>{
    console.log ('Conectado')

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () =>{
    console.log('Desconectado del servidor')

    
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
    
});

socket.on ('enviar-mensaje' , (payload)=> {
    console.log (payload)

})

btnEnviar.addEventListener('click' , () => {
    const mensaje = txtMsg.value
    console.log(mensaje)

    const payload = {
        mensaje, 
        id : '123',
        fecha : new Date().getTime()
    }

    socket.emit ('enviar-mensaje', payload , (id) => {
        
        console.log('Desde el servidorr: ', id)
    })
});


// socket on = escucha evento
// emit = emite el evento 