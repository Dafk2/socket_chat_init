import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

// My functions
import socketControllers from "../socket/socket_controllers.js";

class ServerSocket {
  constructor () {
    this.app = express()
    // http server with express settings
    this.server = http.createServer(this.app)
    // an instance of the server class to obtain a web sockets server
    this.io = new Server(this.server)
    
    this.port = process.env.PORT;
    
    // init middleware
    this.middeleware()

    // events socket
    this.eventSockets();
  }

  listen () {
    this.server.listen(this.port, () => {
      console.log(`server on port ${this.port}`)
    })
  }

  middeleware () {
    this.app.use(express.static('public'))
    this.app.use(cors())
  }

  eventSockets () {
   this.io.on('connection', socketControllers)
  }
}

export default ServerSocket
