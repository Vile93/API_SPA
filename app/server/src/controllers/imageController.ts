import { Request, Response } from 'express';
import { createCanvas } from 'canvas';
import invert from 'invert-color';

const ImageController = {
    get: (req: Request, res: Response) => {
        const { size, color } = req.params;
        try {
            const canvas = createCanvas(+size, +size);
            const context = canvas.getContext('2d');
            const text = `${size} x ${size}`;
            const textHeight = Math.round(+size / 12.5);
            context.fillStyle = `#${color}`;
            context.fillRect(0, 0, +size, +size);

            context.font = `${textHeight}px Arial`;
            context.fillStyle = invert(`#${color}`);
            const textWidth = context.measureText(text).width;
            context.fillText(
                text,
                (+size - textWidth) / 2,
                (+size + textHeight) / 2
            );

            const buffer = canvas.toBuffer('image/png');
            res.end(buffer).status(200);
        } catch (e) {
            res.json({ message: 'Wrong size or color' }).status(400);
        }
    },
};

export default ImageController;
