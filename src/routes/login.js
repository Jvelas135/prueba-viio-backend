import { Router } from "express";

import {login} from "../controllers/login.js"
import { validatefiels } from "../middlewares/validatefields.js";
import { check } from "express-validator";

const router = Router();

/**
 * @openapi
 * /api/login/:
 *   post:
 *     tags:
 *       - API SEGURIDAD
 *     requestBody:
 *         description: login
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/login'
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
    validatefiels], login);

export default router;