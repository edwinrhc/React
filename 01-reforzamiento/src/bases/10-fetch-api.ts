


const API_KEY = 'XuOkdMbhjsDC0JftKwoHh7JErPhSzfp4'

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=dogs&rating=g`);


myRequest
    .then((response) => response.json())
    .then((data) => {
        const imageUrl = data.data.images.original.url;
        console.log(imageUrl);

        const imgElement = document.createElement('img');
        imgElement.src = imageUrl;
        document.body.append(imgElement);
    })
    .catch((err) => {
        console.log(err);
    });