import {connect} from 'mongoose'

export const dbConfig = async ()=>{
    try {
        const res = await connect("mongodb://localhost:27017/dummy")
        console.log(`Database connected Successfully`);
        
    } catch (error) {
        console.log(error);
        
    }
}