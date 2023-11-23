import { Router } from "express";

import {createUser} from "../controllers/users.js"
import { validatefiels } from "../middlewares/validatefields.js";
import { check } from "express-validator";

const router = Router();

/**
 * @openapi
 * /api/users/:
 *   post:
 *     tags:
 *       - API SEGURIDAD
 *     requestBody:
 *         description: Users
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/usuarios'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.post('/', [
    check('email', 'Please enter your email').not().isEmpty(),
    check('password', 'Please enter your password').not().isEmpty(),
    check('name', 'Please enter your name').not().isEmpty(),
    check('phone', 'Please enter your phone').not().isEmpty(),
    validatefiels], createUser);


export default router;