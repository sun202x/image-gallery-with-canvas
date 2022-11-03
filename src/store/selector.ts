import { selector, selectorFamily } from "recoil";
import { fetchImageList } from "../api";
import { currentIdState, imageListState } from "./atom";

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

export const siblingImagesSelector = selector({
    key: 'siblingImagesSelector',
    get: ({ get }) => {
        const imageList = get(imageListState);
        const id = get(currentIdState);
        const currentIndex = imageList.findIndex(image => image.id === id);

        return [-1, 1].map(v => {
            const index = (imageList.length + currentIndex + v) % imageList.length;
            return imageList[index].id;
        });
    }
})