import defaultImage from '../images/defaultImage.png';
const getDataFromApi = () => {
    return fetch("https://stranger-things-api.fly.dev/api/v1/characters/")
    .then((response) => response.json())
    .then((data) => {
        const cleanData = data.map((character) => {
            return {
                id: character._id,
                image: character.photo ? character.photo : defaultImage,
                name: character.name ? character.name : '',
                gender: character.gender ? character.gender : '',
                planet: character.residence[0],
                episodes: character.appearsInEpisodes.length,
                status: character.status ? character.status : '',
            }
        })
        return cleanData;
    })
};

export default getDataFromApi;