import express from 'express'
import { productRoutes } from './routes/products.routes.js'

const app = express()

app.use(express.json())

app.use("/products",productRoutes)

app.listen(5000,()=>{
    console.log("Server running Successfully");
    
})
