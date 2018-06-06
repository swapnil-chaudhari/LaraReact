import Promise from 'bluebird';

export const getImageSizeForSource = source => {
    const img = document.createElement('img');
    img.src = source;

    return new Promise(resolve => {
        img.onload = () => resolve({
            couldGetSize: true,
            width: img.naturalWidth,
            height: img.naturalHeight
        });

        img.onerror = () => resolve({
            couldGetSize: false,
            width: null,
            height: null
        });
    });
};