import React, { WheelEvent } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentIdState } from "../../store/atom";
import { imageSelector, siblingImagesSelector } from "../../store/selector";
import Header from "../common/header";
import useImageDrawer from "./hook/useImageDrawer";
import useImageMouseActor from './hook/useImageMouseActor';

const ImageDetailPage = () => {
    const [currentId, setCurrentId] = useRecoilState(currentIdState);
    const currentImage = useRecoilValue(imageSelector(currentId));
    const siblingImages = useRecoilValue(siblingImagesSelector);

    const { canvasRef, draw } = useImageDrawer(currentImage);
    const { reset, ...handlers } = useImageMouseActor({ canvasRef, draw });

    const handleWheel = (event: WheelEvent<HTMLCanvasElement>) => {
        reset();
        event.deltaY < 0
            ? setCurrentId(siblingImages[0])
            : setCurrentId(siblingImages[1]);
    }

    return (
        <div>
            <Header />
            <canvas 
                ref={canvasRef}
                onWheel={handleWheel}
                {...handlers}
                />
        </div>
    );
}

export default React.memo(ImageDetailPage);