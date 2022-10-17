import { UserRepository } from "../../repositories/UsersRepository";

export class ListUserCases {
    
    constructor() {
        this.userRepository = UserRepository.getInstance(); 

    }

    async execute() {
        const users = await this.userRepository.list();

        return users;
    }
}