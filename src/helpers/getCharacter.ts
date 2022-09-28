import axios from "axios"

export const getCharacters = async () => {
    const ts = 1;
    const apiKey = '20648ccf0e837e196b4dd840d71fdfee';
    const hash = 'e80609e0fa302d6ea49e3653db01c88e';
    const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=${ts}&apikey=${apiKey}&hash=${hash}`);
    const { results } = response.data.data;
    return results;
    
}