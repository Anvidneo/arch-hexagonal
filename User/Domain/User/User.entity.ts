import { UserCreatedAt } from "./ValueObjects/UserCreatedAt";
import { UserEmail } from "./ValueObjects/UserEmail";
import { UserId } from "./ValueObjects/UserId";
import { UserName } from "./ValueObjects/UserName";

export class User {
    id: UserId;
    name: UserName;
    email: UserEmail;
    createdAt: UserCreatedAt;

    constructor(
        id: UserId, 
        name: UserName, 
        email:UserEmail, 
        createdAt: UserCreatedAt
    ){
        this.id = id;
        this.name = name;
        this.email = email;
        this.createdAt = createdAt;
    }

    public concatNameEmail(){
        return `${this.name} -  ${this.email}`;
    }
}