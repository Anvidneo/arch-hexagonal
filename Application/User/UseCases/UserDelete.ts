import { UserRepository } from "../../../Domain/User/Interface/UserRepository";
import { User } from "../../../Domain/User/User.entity";
import { UserId } from "../../../Domain/User/ValueObjects/UserId";

export class UserDelete {
    constructor(private repository: UserRepository) {}

    async run(id: number): Promise<void> {
        return this.repository.delete(new UserId(id));
    }
}