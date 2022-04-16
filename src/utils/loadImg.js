// 图片异步加载
export function loadImgAsync(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = url;
        img.onload = function () {
            resolve(url);
        }
        img.onerror = function () {
            reject(new Error('Could not load image at ' + url))
        }
    })
}