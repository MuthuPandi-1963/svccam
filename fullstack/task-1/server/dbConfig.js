import {connect} from 'mongoose'

export const dbConfig = async ()=>{
    try {
        const res = await connect(process.env.MONGODB_URI)
        console.log(`Database connected Successfully`);
        
    } catch (error) {
        console.log(error);
        
    }
}