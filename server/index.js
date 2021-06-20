const app = require('express')()
const server = require('http').createServer(app)
const io = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:8080",
    methods: ["GET", "POST"]
  }
})
const monacoEditorSocket = require('./socket')(io, '/monacoEditor')

server.listen(3000)
