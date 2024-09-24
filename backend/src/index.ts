require('dotenv').config()
import express, { Express,Request, Response } from 'express'
import {startServer} from "./server"

// const app:Express= express()
const app:express.Application= express()

startServer()

 app.get("/",(req:Request,res:Response)=>{
    return res.send("TypeScript with express")
})

export default app
