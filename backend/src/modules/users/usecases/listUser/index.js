import { UserRepository } from "../../repositories/UsersRepository.js";
import { ListUserCases } from "./listUserCases.js";
import { ListUsersController} from "./listUserController.js"


const userRepository =  UserRepository.getInstance();

const listUserCases = new ListUserCases(userRepository);

const listUserController = new ListUsersController(listUserCases);

export {listUserController};

