import { response } from "express";
import { ListUserCases } from "./listUserCases.js";

export class ListUsersController {
    constructor() {
        this.ListUserCases = new ListUserCases();
    }

    async handle(request, response) {
        const users = await this.ListUserCases.execute();

        return response.json(users);
    }
}