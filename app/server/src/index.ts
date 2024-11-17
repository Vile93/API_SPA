import express from 'express';
import cors from 'cors';
import router from './routes/router';
import { generateUsers } from './utils/generateUsers';
import { generateAlbums } from './utils/generateAlbums';
import { generatePhotos } from './utils/generatePhotos';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 3000;

export const users = generateUsers();
export const albums = generateAlbums();
export const photos = generatePhotos();
app.use(cors());
app.use(router);
app.listen(port);
