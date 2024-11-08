import { Chance } from 'chance';
import { users } from '..';
import { COUNT } from '../constants';
import { IAlbum } from '../interfaces/IAlbum';

export const generateAlbums = (
    countOfUsers = COUNT.USERS,
    countAlbumsPerUser = COUNT.COUNT_OF_ALBUMS_PER_USER
) => {
    const chance = new Chance();
    const albums: IAlbum[] = [];
    let albumId = 1;
    for (let i = 0; i < countOfUsers; i++) {
        for (let j = 0; j < countAlbumsPerUser; j++) {
            const album: IAlbum = {
                id: albumId++,
                title: chance.name(),
                userId: i + 1,
            };
            albums.push(album);
        }
    }
    return albums;
};
