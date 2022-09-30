import axios from "axios";
import * as key from './keys';

export const getCharacters = async () => {
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${key.ts}&apikey=${key.apiKey}&hash=${key.hash}`);
    const { results } = response.data.data;
    console.log(results);
    return results;
}