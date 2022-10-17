import {User} from "../models/User.js"

export class UserRepository {
    users;
    static INSTANCE;

    constructor() {
        this.users = [];
    }


    static getInstance() {
        if (!UserRepository.INSTANCE) {
            UserRepository.INSTANCE = new UserRepository();
        }

        return UserRepository.INSTANCE;
    }

    

    create({ name, username, email, password}) {
        const user = new User();

        Object.assign(user, {
            name,
            username,
            email,
            password,
            creation_date: new Date()
        });

        this.users.push(user);

        return user;

    }

    list() {
        return this.users;
    }

    findByUsername(username) {
        return this.users.find((user) => user.username === username);
    }

    findByEmail(email) {
        return this.users.find((email) => user.email === email);
    }
}