import { response, request } from "express";
import { Users } from "../models/users.js";
import bcryptjs from 'bcryptjs';
import {generateJwt} from "../helpers/generateJwt.js"

export const login = async(req, res =response ) => {

    const { email, password } = req.body;

    try {
      
        // Verificar si el email existe
        const user = await Users.findOne({ where: { email } });
     
      
        if (!user ) {
            return res.status(400).json({
                msg: 'Username/password are not correct'
            });
        } 


        // SI el usuario está activo
        if (!user.state) {
            return res.status(400).json({
                msg: 'Username/password are not correct'
            });
        }


         // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, user.password)
    

        if (!validPassword) {
            return res.status(400).json({
                msg: 'Username/password are not correct'
            });
        } 

    
        // Generar el JWT
      
        const token = await generateJwt(user);

        res.json({
            typeToken: "Bearer",
            token
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
        console.log("error",error)
    }   

}