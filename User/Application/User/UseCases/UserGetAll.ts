import { UserRepository } from "../../../Domain/User/Interface/UserRepository";
import { User } from "../../../Domain/User/User.entity";

export class UserGetAll {
    constructor(private repository: UserRepository) {}

    async run(): Promise<User[]> {
        return this.repository.getAll();
    }
}