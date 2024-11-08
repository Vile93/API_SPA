import { Router } from 'express';
import AlbumController from '../controllers/albumController';

const albumRouter = Router();

albumRouter.get('/', AlbumController.getAll);
albumRouter.get('/:albumId', AlbumController.getAlbum);

export default albumRouter;
