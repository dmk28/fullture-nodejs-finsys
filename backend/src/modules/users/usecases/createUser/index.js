import { UserRepository, UserRepository } from "../../repositories/UsersRepository.js";
import { CreateUserCases } from "./createUserCases.js";
import { CreateUserController } from "./createUserController.js";

const UserRepository = UserRepository.getInstance();

const createUserCases = new CreateUserCases(UserRepository);

const createUserController = new CreateUserController(createUserCases);

export {createUserController};

