import 'dotenv/config';

export const COUNT = {
    USERS: 10,
    COUNT_OF_ALBUMS_PER_USER: 10,
    COUNT_OF_PHOTOS_PER_ALBUM: 50,
};

export const IMAGE_URL = `http://localhost:${process.env.PORT}/images`;
export const SIZE_OF_IMAGE = {
    LOW: 150,
    HIGH: 600,
};
