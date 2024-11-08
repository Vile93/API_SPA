import { Request, Response } from 'express';
import { users } from '..';

const UserController = {
    getAll: (req: Request, res: Response) => {
        res.json(users).status(200);
    },
    getUser: (req: Request, res: Response) => {
        const userId = +req.params.userId;
        const user = users.find((user) => user.id === userId);
        res.json(user ?? {}).status(200);
    },
};

export default UserController;
