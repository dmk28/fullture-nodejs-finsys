import Router from "express";

const userRoutes = Router();

import {CreateUserController } from "../../modules/users/usecases/createUser/createUserController.js";
import {ListUsersController} from "../../modules/users/usecases/listUser/listUserController.js"

userRoutes.post('/users', (request, response) => {
    return CreateUserController.handle(request, response);
}) 

userRoutes.get('/users', (request, response) => {
    return ListUsersController.handle(request, response);
})

export default userRoutes;