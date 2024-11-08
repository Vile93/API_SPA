import Router from 'express';
import PhotoController from '../controllers/photoController';

const photoRouter = Router();

photoRouter.get('/', PhotoController.getAll);
photoRouter.get('/:photoId', PhotoController.getPhoto);

export default photoRouter;
