import { Router } from "express"
import * as authController from './../controllers/auth.controller'
import * as authMiddlewars from "./../middlewares/auth.middleware"

export const Route = Router()
// rutas AUTH
Route.post('/auth/login', authController.login);
Route.post('/auth/registro', authController.registro);

Route.get('/auth/perfil', authMiddlewars.auth, authController.perfil);