import { UserRepository } from "../../repositories/UsersRepository.js";

export class CreateUserCases {
    constructor() {
        this.UserRepository = UserRepository.getInstance();

    }

    execute({ name, username, email, password}) {

        const userNameExists = this.UserRepository.findByUserName(username);
        const emailExists = this.UserRepository.findByEmail(email);
        
        if (userNameExists || emailExists) {
            throw new AppException(400, "Login Credentials already Exist")
        }
        
        const user = this.UserRepository.create({
            name,
            username,
            email,
            password
        });
        return user;
    }
}