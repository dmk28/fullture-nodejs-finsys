import { response } from "express";
import { CreateUserCases } from "./createUserCases.js";

export class CreateUserController {
    constructor() {
        this.CreateUserCases = new CreateUserCases();
    }

    handle(request, response) {
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


