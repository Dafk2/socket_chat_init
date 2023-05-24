console.clear()
import ServerSocket from './models/server.js'
import dotenv from 'dotenv'
dotenv.config()

const server = new ServerSocket().listen();