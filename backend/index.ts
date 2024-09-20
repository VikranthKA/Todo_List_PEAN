import express, { Express,Request, Response } from 'express'

const app:Express= express()
// const app:express.Application= express()


const port:number = 3333


app.get("/",(req:Request,res:Response)=>{
    return res.send("TypeScript with express")
})


app.listen(port,()=>{
    console.log(
        `http://localhost:${port}/`
    )
})