import express from 'express'
import { productRoutes } from './routes/products.routes.js'
import { dbConfig } from './db.js'

const app = express()

app.use(express.json())

app.use("/products",productRoutes)

app.listen(5000,()=>{
    dbConfig()
    console.log("Server running Successfully");
    
})
