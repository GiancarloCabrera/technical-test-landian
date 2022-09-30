import axios from 'axios';
import * as key from './keys';

export const getComics = async (idChar: any) => {
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${idChar}/comics?ts=${key.ts}&apikey=${key.apiKey}&hash=${key.hash}`);
    const { results } = response.data.data;
    return results;    
}