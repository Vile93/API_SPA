import { Router } from 'express';
import ImageController from '../controllers/imageController';

const imageRouter = Router();

imageRouter.get('/:size/:color', ImageController.get);

export default imageRouter;
