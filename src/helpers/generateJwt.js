import jwt from "jsonwebtoken";
import { SECRETORPRIVATEKEY } from "../../config.js";

export const generateJwt  =  ( user ="" ) => {

    return new Promise( (resolve, reject) => {
  
        const array = [{
            "uid": user.id,
            "user": {
                "name": user.name,
                "phone": user.phone
            }
        }]
        const payload = {"info":array};

        jwt.sign( payload, SECRETORPRIVATEKEY, {
            expiresIn: '24h'
        }, ( err, token ) => {
 
            if ( err ) {
                console.log(err);
                reject( 'Token could not be generated' )
            } else {
                resolve( token );
            }
        })

    }) 
}
