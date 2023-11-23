import { response, request } from "express";
import { Users } from "../models/users.js";
import bcryptjs from 'bcryptjs';
import {generateJwt} from "../helpers/generateJwt.js"

export const createUser = async (req = request, res = response) => {
    try {
        const { name, email, phone , password, state = 1} = req.body;
        const user = await Users.findOne({ where: { email } })
        if (user) {
            res.status(500).json({
                msg: "User already exists try another"
            })
        } else {
            
            const users = new Users({ name, email, phone , password, state});

            const salt = bcryptjs.genSaltSync(12);
            users.password = bcryptjs.hashSync(password, salt);
    
            await users.save();

            const token = await generateJwt(users)

            res.status(200).json({
                "msg": "User created successfully",
                "success": true,
                "typeToken": "Bearer", 
                token
            });
        }

    } catch (error) {
        res.status(500).json({
            msg: "contact the administrator"
        })
        console.log("error",error)
    }

}
