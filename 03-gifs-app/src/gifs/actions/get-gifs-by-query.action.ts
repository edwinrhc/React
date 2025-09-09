import axios from "axios";
import type {GiphyResponse} from "../interfaces/giphy.response.ts";
import type {Gif} from "../interfaces/gif.interface.ts";


export const getGifsByQuery = async (query: string): Promise<Gif[]> => {
    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: 'XuOkdMbhjsDC0JftKwoHh7JErPhSzfp4',
        }
    })

    return response.data.data.map((gif) => ({
        id: gif.id,
        title: gif.title,
        url: gif.images.original.url,
        width: Number(gif.images.original.width),
        height: Number(gif.images.original.height),
    }));
};
