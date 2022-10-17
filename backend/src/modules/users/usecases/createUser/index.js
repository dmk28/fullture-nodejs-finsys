import { UserRepository, UserRepository } from "../../repositories/UsersRepository";
import { CreateUserCases } from "./createUserCases";
import { CreateUserController } from "./createUserController";

const UserRepository = UserRepository.getInstance();

const createUserCases = new CreateUserCases(UserRepository);

const createUserController = new CreateUserController(createUserCases);

export {createUserController};

