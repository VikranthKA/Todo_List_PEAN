import app from "./index"
const port: number = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 3333;
import {sequelize} from "./db/dbConfig"
// const app:Express= express()


export const startServer = async()=>{
    try {
        await sequelize.sync()
        console.log(`Database connected on ${sequelize.config.port}`)

        app.listen(port,()=>{
            console.log(
                `Server Running on ${port}`
            )
        })
        
    } catch (error) {
        console.log('Unable to start the db and port',error)
        
    }
}

