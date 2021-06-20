let userId = 0
const users = {}

module.exports = function(io, nsp) {
  const server = io.of(nsp)
  server.on('connection', socket => {
    users[socket.id] = {}
    users[socket.id].user = socket.user = `#user${userId}`
    users[socket.id].admin = socket.admin = false
    users[socket.id].language = socket.language = 'javascript'

    userId++

    console.log(`Socket.io[${nsp}]: Connect ${socket.id}`)

    if(server.sockets.size === 1) {
      socket.emit('admin')
      socket.admin = true
    } else {
      socket.emit('users', Object.values(users))
    }

    socket.broadcast.emit('connected', socket.user)

    socket.on('disconnect', data => {
      console.log(`Socket.io[${nsp}]: Disconnect ${socket.id}`)
      delete users[socket.id]
    })

    socket.on('filedata', ({value, language}) => {
      socket.broadcast.emit('resetdata', value)
      socket.broadcast.emit('language changing', language)
    })

    socket.on('code changing', data => {
      data.user = socket.user
      socket.broadcast.emit('code changing', data)
    })

    socket.on('language changing', language => {
      socket.broadcast.emit('language changing', language)
    })
  })

}
