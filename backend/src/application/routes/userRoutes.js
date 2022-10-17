import Router from "express";

const usersRouters = Router();

import {createUsersController} from "../modules/users/usecases/CreateUser/index.js";
import {listUsersController} from "../modules/users/usecases/ListUser/index.js";

usersRouters.post("/users", (req, res) => {
    return createUsersController.handle(req, res);
});

usersRouters.get("/users", (req, res) => {
    return listUsersController.handle(req, res);
});


export default usersRouters;