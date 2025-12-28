import mongoose  from "mongoose";
import { ca } from "zod/locales";

type ConnectionObject={
    isConnected?: number;    

}
const connection:ConnectionObject={ }
async function dbConnect():Promise<void>{
    if (connection.isConnected){
        console.log("already connected")
        return;
    }
    
    try{

        await mongoose.connect(process.env.MONGODB_URI ||"",{})
        connection.isConnected=mongoose.connections[0].readyState
        console.log("connected to database")


    }catch(error){
        
        console.log("error connecting to database",error)
        process.exit(1);
    }

}


export default dbConnect;