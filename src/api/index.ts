import _ from 'lodash';

type ResponseData<T> = {
    done: boolean;
    data: T;
}

const request = async <T>(url: string): Promise<ResponseData<T>> => {
    const result = await fetch(`${url}`);
    
    if (result.ok) {
        const json = await result.json();
        return {
            done: true,
            data: json
        };
    }

    throw new Error(`Http error(${result.status}): ${result.statusText}`);
}

export type ImageType = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
}

export const fetchImageList = () => request<ImageType[]>('https://picsum.photos/v2/list');