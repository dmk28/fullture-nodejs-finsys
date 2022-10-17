import { response } from "express";
import { ListUserCases } from "./listUserCases";

export class ListUsersController {
    constructor() {
        this.ListUserCases = new ListUserCases();
    }

    async handle(req, response) {
        const users = await this.ListUserCases.execute();

        return response.json(users);
    }
}