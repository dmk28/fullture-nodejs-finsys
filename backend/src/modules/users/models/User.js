import {v4 as uuidV4} from "uuid";


export class User {
    id;
    name; 
    username;
    email;
    password;
    create_id; 



constructor() {
    if (!this.id) {
        this.id = uuidV4;
    }
}

}