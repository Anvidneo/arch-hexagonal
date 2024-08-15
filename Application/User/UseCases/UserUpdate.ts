import { UserRepository } from "../../../User/Domain/User/Interface/UserRepository";
import { User } from "../../../User/Domain/User/User.entity";
import { UserCreatedAt } from "../../../User/Domain/User/ValueObjects/UserCreatedAt";
import { UserEmail } from "../../../User/Domain/User/ValueObjects/UserEmail";
import { UserId } from "../../../User/Domain/User/ValueObjects/UserId";
import { UserName } from "../../../User/Domain/User/ValueObjects/UserName";

export class UserUpdate{
    constructor(private repository: UserRepository){}

    async run(id: number, name: string, email:string): Promise<void>{
        const user = new User(
            new UserId(id),
            new UserName(name),
            new UserEmail(email),
            new UserCreatedAt(new Date())
        );

        return this.repository.update(user);
    }
}