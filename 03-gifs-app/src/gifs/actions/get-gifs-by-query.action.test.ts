import {beforeEach, describe, expect, test, vi} from "vitest";
import AxiosMockAdapter from 'axios-mock-adapter';

import {getGifsByQuery} from "./get-gifs-by-query.action.ts";
import {giphySearchResponseMock} from "../../../test/mock/giphy.response.data.ts";
import {giphyApi} from "../api/giphy.api.ts";


describe('getGifsByQuery', () => {

    let mock = new AxiosMockAdapter(giphyApi);

    beforeEach(() => {
        // mock.reset();
       mock = new AxiosMockAdapter(giphyApi);
    })

/*    test('should return a list of gifs', async() => {

        const gifs = await getGifsByQuery('goku');
        const [gif1] = gifs;

        expect(gifs.length).toBe(10);

        expect(gif1).toStrictEqual({
            id: expect.any(String),
            height: expect.any(Number),
            width: expect.any(Number),
            title: expect.any(String),
            url: expect.any(String)
        })
    })*/


    test('should return a list of gifs', async() => {
        // Llamamos una instancia de Mock
        mock.onGet('/search').reply(200, giphySearchResponseMock)

        const gifs = await getGifsByQuery('goku');


        expect(gifs.length).toBe(10);

        gifs.forEach(gif => {
            expect( typeof gif.id).toBe('string');
            expect( typeof gif.title).toBe('string');
            expect( typeof gif.url).toBe('string');
            expect( typeof gif.width).toBe('number');
            expect( typeof gif.height).toBe('number');
        })

    })


    test('should return a empty list of gifs if query is empty', async() => {
        // Llamamos una instancia de Mock
        //mock.onGet('/search').reply(200, giphySearchResponseMock)

        mock.restore();

        const gifs = await getGifsByQuery('');

        expect(gifs.length).toBe(0);
    });

    test('should handle error when the API returns an error', async () => {

        const consoleErrorSpy = vi.spyOn(console,'error').mockImplementation( () => {});


        mock.onGet('/search').reply(400,{
            data: {
                message: 'Bad request'
            }
        });

        const gifs  = await getGifsByQuery('goku');

        console.log('Hola mundo')
        expect(gifs.length).toBe(0);
        expect(consoleErrorSpy).toHaveBeenCalled();
        expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
        expect(consoleErrorSpy).toHaveBeenCalledWith(expect.anything());

    });
})