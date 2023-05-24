const socketControllers = (socket) => {
  console.log('New Client connect')

  socket.on('disconnect', () => {
    console.log('Client disconnect') 
  })

  socket.on('send-message', (payload, callback) => {
    let id = 'test'
   
    callback(id)
    socket.broadcast.emit('send-message', payload)
  })
}

export default socketControllers;