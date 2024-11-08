import { Chance } from "chance";
import { COUNT, IMAGE_URL, SIZE_OF_IMAGE } from "../constants";
import { IPhoto } from "../interfaces/IPhoto";

export const generatePhotos = (
    countOfAlbums = COUNT.COUNT_OF_ALBUMS_PER_USER * COUNT.USERS,
    countOfPhotosPerAlbum = COUNT.COUNT_OF_PHOTOS_PER_ALBUM
) => {
    const chance = new Chance();
    const photos: IPhoto[] = [];
    let photoId = 1;
    for (let i = 0; i < countOfAlbums; i++) {
        for (let j = 0; j < countOfPhotosPerAlbum; j++) {
            const color = chance.string({
                pool: "0123456789abcdef",
                length: 6,
            });
            const photo: IPhoto = {
                id: photoId++,
                albumId: i + 1,
                title: chance.name(),
                url: IMAGE_URL + `/${SIZE_OF_IMAGE.HIGH}/${color}`,
                thumbnailUrl: IMAGE_URL + `/${SIZE_OF_IMAGE.LOW}/${color}`,
            };
            photos.push(photo);
        }
    }
    return photos;
};
