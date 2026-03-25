import {Router} from 'express'
import { createProduct, deleteProductsById, getProductById, getProducts, updateProductById } from '../controllers/products.controller.js'

export const productRoutes = Router()

productRoutes.post("/",createProduct)
productRoutes.get("/",getProducts)
productRoutes.get("/:id",getProductById)
productRoutes.put("/:id",updateProductById)
productRoutes.delete("/:id",deleteProductsById)
