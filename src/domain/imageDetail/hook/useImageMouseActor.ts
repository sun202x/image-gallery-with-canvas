import { MouseEvent, useCallback, useRef } from "react";
import _ from 'lodash';

type useImageZoomerProps = {
    canvasRef: React.RefObject<HTMLCanvasElement>,
    draw: (scale: number, degree: number) => void;
};

const MOUSE_LEFT = 1;
const MOUSE_RIGHT = 2;

const ZOOM_STEP = 0.02;
const DEGREE_STEP = 2;

const MAX_SCALE = 3;
const MIN_SCALE = 0.2;

const useImageMouseActor = ({ canvasRef, draw }: useImageZoomerProps) => {
    const prevX = useRef(0);
    const currentScale = useRef(1);
    const currentDegree = useRef(0);
    
    const handleMouseDown = useCallback((event: MouseEvent<HTMLCanvasElement>) => {
        prevX.current = event.clientX;
    }, []);

    const handleMouseMove = useCallback((event: MouseEvent<HTMLCanvasElement>) => {
        if ((prevX.current - event.clientX) === 0) {
            return;
        }

        const next = (prevX.current - event.clientX) > 0 ? 1 : -1;
        let scale = currentScale.current, 
            degree = currentDegree.current;

        if (event.buttons === MOUSE_LEFT) {
            scale = _.clamp(
                currentScale.current + (ZOOM_STEP * next), 
                MIN_SCALE, 
                MAX_SCALE
            );
            currentScale.current = scale;

        } else if (event.buttons === MOUSE_RIGHT) {
            degree = (360 + currentDegree.current + (DEGREE_STEP * next)) % 360;
            currentDegree.current = degree;
        }

        draw(scale, degree);
        prevX.current = event.clientX;
    }, [draw]);

    const handleMouseUp = useCallback((event: MouseEvent<HTMLCanvasElement>) => {
        prevX.current = 0;
    }, []);

    const handleContextMenu = useCallback((event: MouseEvent<HTMLCanvasElement>) => {
        event.preventDefault();
    }, []);

    const reset = useCallback(() => {
        currentScale.current = 1;
        currentDegree.current = 0;
    }, []);

    return {
        onMouseDown: handleMouseDown, 
        onMouseMove: handleMouseMove, 
        onMouseUp: handleMouseUp,
        onContextMenu: handleContextMenu,
        reset
    };
}

export default useImageMouseActor;