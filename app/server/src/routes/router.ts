import { Router } from 'express';
import userRouter from './userRouter';
import albumRouter from './albumRouter';
import photoRouter from './photoRouter';
import imageRouter from './imageRouter';
const router = Router();

router.use('/users', userRouter);
router.use('/albums', albumRouter);
router.use('/photos', photoRouter);
router.use('/images', imageRouter);

export default router;
