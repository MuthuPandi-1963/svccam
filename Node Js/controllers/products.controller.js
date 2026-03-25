let products = [
    {
        id : 1 ,
        name : "Lenovo Legion",
        des : "NA"
    },
    {
        id : 2 ,
        name : "MI ",
        des : "NA"
    },
]

export const createProduct = (req,res)=>{
    const {id,name,des} = req.body
    const newProduct = {
        // id : id 
        id ,
        name,
        des
    }
    products.push(newProduct) 
    return res.json({
        message : "products Added  Successfully",
        data : newProduct
    })
}

export const getProducts = (req,res)=>{
    return res.json({
        message : "products Fetched  Successfully",
        data : products
    })
}

export const getProductById = (req,res)=>{
    const id = req.params.id
    const findProduct = products.filter((val)=>val.id == id)

    if(findProduct.length > 0){
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

export const updateProductById = (req,res)=>{
    const id = req.params.id
    const newData = req.body
    const findProduct = products.filter(val=>val.id == id)
    
    if(findProduct.length > 0){
        products.forEach((val)=>{
        if(val.id == id){
            val.name = newData.name ??val.name
            val.des = newData.des ??val.des
        }
    })
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

export const deleteProductsById = (req,res)=>{
    const id = req.params.id
    const findProduct = products.filter((val)=>val.id == id)

    if(findProduct.length > 0){
        products = products.filter((val)=>val.id != id)
        return res.json({
            message : "products Deleted  Successfully",
            data : findProduct
        })
    }else{
        return res.json({
            message : "product id not found"
        })
    }
}