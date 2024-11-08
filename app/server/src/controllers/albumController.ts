import { Request, Response } from 'express';
import { albums } from '..';

const AlbumController = {
    getAll: (req: Request, res: Response) => {
        const userId = req.query.userId;
        let resAlbums = albums;
        if (userId) {
            resAlbums = resAlbums.filter((album) => album.userId === +userId);
        }
        res.json(resAlbums).status(200);
    },
    getAlbum: (req: Request, res: Response) => {
        const albumId = +req.params.albumId;
        const album = albums.find((album) => album.id === albumId);
        res.json(album ?? {}).status(200);
    },
};

export default AlbumController;
