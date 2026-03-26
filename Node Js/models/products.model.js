import { model, Schema } from "mongoose";


const productSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    des : {
        type : String,
        default:"Nothing"
    }
})

export const productModel =
 model("products",productSchema)