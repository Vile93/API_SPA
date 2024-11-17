import { Request, Response } from 'express';
import { photos } from '..';
import { pagination } from '../utils/pagination';

const PhotoController = {
    getAll: (req: Request, res: Response) => {
        const page = req.query.page;
        const limit = req.query.limit;
        const albumId = req.query.albumId;

        let resPhotos = photos;
        if (albumId) {
            resPhotos = resPhotos.filter((photo) => photo.albumId === +albumId);
        }
        if (page && limit) {
            resPhotos = pagination(resPhotos, +page, +limit);
        }
        res.json(resPhotos).status(200);
    },
    getPhoto: (req: Request, res: Response) => {
        const photoId = +req.params.photoId;
        const photo = photos.find((photo) => photo.id === photoId);
        res.json(photo ?? {}).status(200);
    },
};

export default PhotoController;
