import type { GiphyRandomResponse } from "./data/giphy.response.ts";


const API_KEY = 'XuOkdMbhjsDC0JftKwoHh7JErPhSzfp4'

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=dogs&rating=g`);


const createImageInsideDom = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}


myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
       createImageInsideDom(imageUrl);
    })
    .catch((err) => {
        console.log(err);
    });