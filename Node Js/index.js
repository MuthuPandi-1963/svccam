import express from 'express'
import { productRoutes } from './routes/products.routes'

const app = express()

app.use(express.json())

app.use("/products",productRoutes)

app.listen(5000,()=>{
    console.log("Server running Successfully");
    
})
