import { User } from "../../Domain/User/User.entity";
import { UserId } from "../../Domain/User/ValueObjects/UserId";
import { UserRepository } from "../../Domain/User/Interface/UserRepository";

export class InMemory implements UserRepository {
    private users: User[] = [];

    async create(user: User): Promise<void> {
        this.users.push(user);
    }

    async getAll(): Promise<User[]> {
        return this.users;
    }

    async getOneById(id: UserId): Promise<User | null> {
        return this.users.find((user) => user.id.value === id.value) || null;
    }

    async update(user: User): Promise<void> {
        const index = this.users.findIndex((u) => u.id.value == user.id.value);
        this.users[index] = user;
    }

    async delete(id: UserId): Promise<void> {
        this.users = this.users.filter((user) => user.id.value !== id.value);
    }
}