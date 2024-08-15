import { User } from "../User.entity";
import { UserId } from "../ValueObjects/UserId";

export interface UserRepository {
    create(user: User): Promise<void>;
    getAll(): Promise<User[]>;
    getOneById(id: UserId): Promise<User | null>;
    update(user: User): Promise<void>;
    delete(id: UserId): Promise<void>;
}