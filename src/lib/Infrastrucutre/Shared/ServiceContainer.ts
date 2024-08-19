import { Postgres } from "../Repositories/Postgres";
import { InMemory } from "../Repositories/InMemory";
import { UserGetAll } from "../../Application/User/UseCases/UserGetAll";
import { UserCreate } from "../../Application/User/UseCases/UserCreate";
import { UserUpdate } from "../../Application/User/UseCases/UserUpdate";
import { UserDelete } from "../../Application/User/UseCases/UserDelete";
import { UserGetOneById } from "../../Application/User/UseCases/UserGetOneById";

const userRepository = new InMemory();

export const ServiceContainer = {
    user: {
        getAll: new UserGetAll(userRepository),
        create: new UserCreate(userRepository),
        update: new UserUpdate(userRepository),
        delete: new UserDelete(userRepository),
        getOneById: new UserGetOneById(userRepository),
    }
}