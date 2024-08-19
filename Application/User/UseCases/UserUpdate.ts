import { UserRepository } from "../../../Domain/User/Interface/UserRepository";
import { User } from "../../../Domain/User/User.entity";
import { UserCreatedAt } from "../../../Domain/User/ValueObjects/UserCreatedAt";
import { UserEmail } from "../../../Domain/User/ValueObjects/UserEmail";
import { UserId } from "../../../Domain/User/ValueObjects/UserId";
import { UserName } from "../../../Domain/User/ValueObjects/UserName";

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