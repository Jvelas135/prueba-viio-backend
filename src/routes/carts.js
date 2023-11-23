import { Router } from "express";
import { validateJwt } from "../middlewares/validateJwt.js";

import {getUrl} from "../controllers/carts.js"
const router = Router();

/**
 * @openapi
 * /api/carts/:
 *   get:
 *     tags:
 *       - API CONSULTAS
 *     requestBody:
 *         description: carts
 *         content:
 *           application/json:
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
router.get('/',validateJwt,getUrl);


export default router;