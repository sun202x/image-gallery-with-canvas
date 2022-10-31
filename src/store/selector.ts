import { selector, selectorFamily } from "recoil";
import { fetchImageList } from "../api";
import { imageListState } from "./atom";

export const imageListSelector = selector({
    key: 'imageListSelector',
    get: async ({ get }) => {
        const response = await fetchImageList();
        return response.data;
    }
});

export const imageSelector = selectorFamily({
    key: 'imageSelector',
    get: (id: string) => ({ get }) => {
        const imageList = get(imageListState);
        return imageList.find(image => image.id === id);
    }
});