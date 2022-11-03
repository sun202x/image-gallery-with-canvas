
export const refineImageUrl = (url: string, width: number, height: number) => {
    const paths = url.split('/');
    paths.splice(-2);
    paths.push(`${width}`, `${height}`);
    return paths.join('/');
}