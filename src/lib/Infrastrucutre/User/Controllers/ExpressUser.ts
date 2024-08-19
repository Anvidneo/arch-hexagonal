import e, { Request, Response } from "express";
import { UserNotFoundError } from "../../../Domain/User/Errors/UserNotFoundError";
import { ServiceContainer } from "../../Shared/ServiceContainer";

export class ExpressUser {
    async getAll(req: Request, res: Response){
        const users = await ServiceContainer.user.getAll.run();

        return res.json(users).status(200);
    }

    async getOneById(req: Request, res: Response){
        try {
            const id = req.params.id != null ? parseInt(req.params.id) : 0;
            const user = await ServiceContainer.user.getOneById.run(id);
    
            return res.json(user).status(200);
        } catch (error) {
            if(error instanceof UserNotFoundError){
                return res.status(404).json({message: error.message});
            }

            throw error;
        }
    }

    async create(req: Request, res: Response){
        const { id, name, email } = req.body as {
            id: number
            name: string,
            email: string
        };

        await ServiceContainer.user.create.run(id, name, email);

        return res.status(201).send();
    }

    async update(req: Request, res: Response){
        const { id, name, email } = req.body as {
            id: number
            name: string,
            email: string
        };

        await ServiceContainer.user.update.run(id, name, email);

        return res.status(201).send();
    }

    async delete(req: Request, res: Response){
        const id = req.params.id != null ? parseInt(req.params.id) : 0;
        await ServiceContainer.user.delete.run(id);

        return res.status(204).send;
    }
}