require('dotenv').config()
import express, { Express,Request, Response } from 'express'
import {startServer} from "./server"
import todoRouter from "./app/routes/todo.routes"
import userRouter from "./app/routes/user.routes"

// const app:Express= express()
const app:express.Application= express()

startServer()

app.use(express.json())

app.use("/api/v1/user",userRouter)
app.use('/api/v1/todo',todoRouter)


 app.get("/",(req:Request,res:Response)=>{
    return res.send("TypeScript with express")
})

export default app
