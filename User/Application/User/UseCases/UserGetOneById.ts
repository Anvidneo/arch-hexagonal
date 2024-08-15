import { UserNotFoundError } from "../../../Domain/User/Errors/UserNotFoundError";
import { UserRepository } from "../../../Domain/User/Interface/UserRepository";
import { User } from "../../../Domain/User/User.entity";
import { UserId } from "../../../Domain/User/ValueObjects/UserId";

export class UserGetOneById {
    constructor(private repository: UserRepository) {}

    async run(id: number): Promise<User | null> {
        const user = this.repository.getOneById(new UserId(id));

        if (!user) throw new UserNotFoundError("User not found");
        
        return user;
    }
}