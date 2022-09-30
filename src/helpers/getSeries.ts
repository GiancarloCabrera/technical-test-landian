import axios from "axios";
import * as key from './keys';

export const getSeries = async (urlResource: any) => {
    const url = urlResource.slice(4,urlResource.length);
    // console.log('NUEVAAA: ',`https${url}?ts=${key.ts}&apikey=${key.apiKey}&hash=${key.hash}`);
    // console.log(`https${url}?ts=${key.ts}&apiKey=${key.apiKey}&hash=${key.hash}`)
    const response = await axios.get(`https${url}?ts=${key.ts}&apikey=${key.apiKey}&hash=${key.hash}`);
    // const response = await axios.get(`https://gateway.marvel.com/v1/public/series/2045?ts=1&apikey=20648ccf0e837e196b4dd840d71fdfee&hash=e80609e0fa302d6ea49e3653db01c88e`);
    const { results } = response.data.data;
    console.log('RESPONSE: ',results[0]);
    return results[0];
}
