import axios from "axios";
import type {GiphyResponse} from "../interfaces/giphy.response.ts";


export const getGifsByQuery = async (query: string) => {
    const response = await axios.get<GiphyResponse>('https://api.giphy.com/v1/gifs/search', {
        params: {
            q: query,
            limit: 10,
            lang: 'es',
            api_key: 'XuOkdMbhjsDC0JftKwoHh7JErPhSzfp4',
        }
    })
    console.log(response.data)
};
