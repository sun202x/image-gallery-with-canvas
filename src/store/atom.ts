import { atom } from "recoil";
import { imageListSelector } from "./selector";

export const imageListState = atom({
    key: 'imageListState',
    default: imageListSelector
});

export const currentIdState = atom({
    key: 'currentImageState',
    default: ''
});