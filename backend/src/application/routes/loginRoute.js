import Router from "express";

const loginRoutes = Router();

// import {loginUserController} from "../modules/users/usecases/AuthenticateUser/index.js";

loginRoutes.post("/", (request, response) => {
    return loginUserController.handle(request, response);
})

export default loginRoutes;