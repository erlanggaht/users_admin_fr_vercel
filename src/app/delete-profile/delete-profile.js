import axios from "axios";
import { localhost_port } from "../page";

export default async function DeleteProfile(decodedJwtEmail) {
    try {
      
        if(confirm('Yakin menghapus akun ?')) {
            const deleteUser = await axios.delete(`${process.env.URL_HOST}/delete`,{
            data : {
                email : decodedJwtEmail
            },
            withCredentials : true
            })
            location.href = '/login'
        } 
        
    } catch (error) {
        console.log({errorCatch : error})
    }
  
    

}
