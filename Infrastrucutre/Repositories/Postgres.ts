import { Pool } from "pg";
import { User } from "../../Domain/User/User.entity";
import { UserId } from "../../Domain/User/ValueObjects/UserId";
import { UserName } from "../../Domain/User/ValueObjects/UserName";
import { UserEmail } from "../../Domain/User/ValueObjects/UserEmail";
import { UserRepository } from "../../Domain/User/Interface/UserRepository";
import { UserCreatedAt } from "../../Domain/User/ValueObjects/UserCreatedAt";

type PostgresUser = {
    id: number,
    name: string,
    email: string,
    createdAt: Date
};

export class Postgres implements UserRepository {
    client: Pool
    
    constructor() {
        this.client = new Pool({
            connectionString: process.env.DATABASE_URL
        });
    }

    async create(user: User): Promise<void> {
        const query = {
            text: "INSERT INTO users (id, name, email, createdAt) VALUES ($1, $2, $3, $4)",
            values: [user.id.value, user.name.value, user.email.value, user.createdAt.value],
        };

        await this.client.query(query);
    }

    async getAll(): Promise<User[]> {
        const query = {
            text: "SELECT * FROM users",
        };

        const result = await this.client.query<PostgresUser>(query);
        return result.rows.map((row) => this.mapToDomain(row));
    }

    async getOneById(id: UserId): Promise<User | null> {
        const query = {
            text: "SELECT * FROM users WHERE id = $1",
            values: [id]
        };

        const result = await this.client.query<PostgresUser>(query);

        if(result.rows.length === 0){
            return null;
        }

        const row = result.rows[0];

        return this.mapToDomain(row);;
    }

    async update(user: User): Promise<void> {
        const query = {
            text: "UPDATE users SET name = $1, email = $2 WHERE id = $3",
            values: [user.name.value, user.email.value, user.id.value]
        }

        await this.client.query(query);
    }

    async delete(id: UserId): Promise<void> {
        const query = {
            text: "DELETE FROM users WHERE id = $3",
            values: [id]
        }

        await this.client.query(query);
    }

    private mapToDomain(user: PostgresUser): User{
        return new User(
            new UserId(user.id),
            new UserName(user.name),
            new UserEmail(user.email),
            new UserCreatedAt(user.createdAt),
        );
    }
}