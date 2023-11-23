import { SECRETORPRIVATEKEY } from "../../config.js";
import jwt from 'jsonwebtoken';

export const validateJwt = async( req = request, res = response, next ) => {

    var Bearertoken = req.header('Authorization');
    var TokenArray
    if(typeof Bearertoken !== 'undefined'){
         TokenArray = Bearertoken.split(" ");
    }else{
        return res.status(401).json({
            msg: 'Unauthorized'
        })
    }


    try {
       
       jwt.verify( TokenArray[1], SECRETORPRIVATEKEY );
    
        next();

    } catch (error) {
        
        res.status(401).json({
            msg: 'Invalid token'
        })
    }

}