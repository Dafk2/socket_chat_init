const socketClient = io ()

const spnOnline = document.getElementById('spnOnline')
const spnOffline= document.getElementById('spnOffline')
const txtMessage = document.getElementById('txtMessage')
const btnSend = document.getElementById('btnSend')

socketClient.on('connect', () => {
  console.log('Client connect')

  spnOffline.style.display = 'none'
  spnOnline.style.display = ''
})

socketClient.on('disconnect', () => {
  console.log('Client disconnect')

  spnOnline.style.display = 'none'
  spnOffline.style.display = ''
})

// listen to the event that the server emits
socketClient.on('send-message', (payload) => {
  console.log(payload)
})

btnSend.addEventListener('click', () => {
  const message = txtMessage.value;

  let payload = {
    message,
    date: new Date().getTime(),
    id: 'Id test'
  }
   
  socketClient.emit('send-message', payload, (id) => {
    console.log(`From the client`, id)
  })
})