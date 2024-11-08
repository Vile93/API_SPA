import { Chance } from 'chance';
import { COUNT } from '../constants';
import { IUser } from '../interfaces/IUser';

export const generateUsers = (count = COUNT.USERS) => {
    const chance = new Chance();
    const users: IUser[] = [];
    for (let i = 0; i < count; i++) {
        const user: IUser = {
            id: i + 1,
            company: chance.company(),
            email: chance.email(),
            name: chance.name(),
            phone: chance.phone(),
            username: chance.name(),
            website: chance.url(),
        };
        users.push(user);
    }
    return users;
};
