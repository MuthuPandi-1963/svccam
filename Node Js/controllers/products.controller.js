import { productModel } from "../models/products.model.js"

export const createProduct =async (req,res)=>{
    const {name,des} = req.body
    const newProduct = {
        name,
        des
    }
    // products.push(newProduct) 
   await productModel.create(newProduct)
    return res.json({
        message : "products Added  Successfully",
        data : newProduct
    })
}

export const getProducts = async(req,res)=>{
    const products = await productModel.find()
    return res.json({
        message : "products Fetched  Successfully",
        data : products
    })
}

export const getProductById =async (req,res)=>{
    const id = req.params.id
    const findProduct = await productModel.findById(id)

    if(findProduct){
        return res.json({
            message : "products Fetched  Successfully",
            data : findProduct
        })
    }else{
        return res.json({
            message : "product id not found"
        })
    }
}

export const updateProductById = async (req,res)=>{
    const id = req.params.id
    const newData = req.body
    const findProduct = await productModel.findByIdAndUpdate(id,newData)
    
    if(findProduct){
    return res.json({
        message : "products updated  Successfully",
        data : findProduct
    })
    }else{
        return res.json({
            message : "product id not found"
        })
    }
}

export const deleteProductsById =async (req,res)=>{
    const id = req.params.id
    const findProduct = await productModel.findByIdAndUpdate(id)

    if(findProduct){
        return res.json({
            message : "products Deleted  Successfully"
        })
    }else{
        return res.json({
            message : "product id not found"
        })
    }
}