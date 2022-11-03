import { useCallback, useEffect, useRef } from "react";
import { ImageType } from "../../../api";
import { refineImageUrl } from "../../../util";

const useImageDrawer = (currentImage?: ImageType) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const imageRef = useRef<CanvasImageSource>();

    const clear = useCallback((canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, canvas.width, canvas.height);
    }, []);

    const draw = useCallback((scale: number, degree: number = 0) => {
        if (imageRef.current) {
            const canvas = canvasRef.current;
            const context = canvas?.getContext('2d');

            if (canvas && context) {
                clear(canvas, context);

                const dw = canvas.width * scale,
                    dh = canvas.height * scale;

                context.save();
                context.translate((dw / 2), (dh / 2));
                context.rotate(degree * Math.PI / 180);
                context.translate(-(dw / 2), -(dh / 2));
                context.drawImage(imageRef.current, 0, 0, dw, dh);
                context.restore();
            }
        }
    }, [clear]);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (currentImage) {
            const image = new Image();
            image.src = refineImageUrl(currentImage.download_url, 800, 600);
            image.addEventListener('load', () => {
                if (canvas) {
                    canvas.width = 800;
                    canvas.height = 600;
                    draw(1);
                }
            });
            imageRef.current = image;
        }

    }, [currentImage, draw]);

    return {
        canvasRef, 
        draw
    };
}

export default useImageDrawer;