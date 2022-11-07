import { AppException } from "../../../../application/errors/AppException";
import { UserRepository } from "../../repositories/UsersRepository";
import { prisma } from "@prisma/client";

import pkg from "jsonwebtoken";
import {sign} from pkg;
import {compare} from "bcrypt";

export class loginUser {
    constructor() {
        this.userRepository = UserRepository.getInstance();
   }

   async execute(username, password) {

    await prisma.$connect();

    const user = await prisma.users.findByUsername({
        where: {
            username,
        },

    });
    await prisma.$disconnect();

    if(!user) {
        throw new AppException(400, "Credentials incorrect.");
    }

    const pwdMatch = await compare(password, user.password);

    if (!pwdMatch) {
        throw new AppException(400, "Credentials incorrect.")
    }

    const token = sign({}, process.env.JWT_SECRET,{
        subject: user.UserId,
        expiresIn: "1d",
    });

    return {
        token,
        user: {
            name: user.name,
            username: user.username,
            email: user.email,
        },
    };
   }
}

