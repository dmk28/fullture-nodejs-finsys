import { response } from "express";
import { CreateUserCases } from "./createUserCases.js";

export class CreateUserController {
    constructor() {
        this.CreateUserCases = new CreateUserCases();
    }

    handle(req, res) {
        const { name, username, email, password} = request.body;

        const user = this.CreateUserCases.execute({
            name,
            username,
            email,
            password
        });

        return response.json(user);
    }
}


