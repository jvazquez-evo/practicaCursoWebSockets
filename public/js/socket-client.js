const socket = io();

const lblOnline = document.getElementById ('on')
const lblOffline = document.getElementById ('off')


socket.on('connect', () =>{
    console.log ('Conectado')

    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});

socket.on('disconnect', () =>{
    console.log('Desconectado del servidor')

    
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
    
})