const fetch = require("node-fetch");

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

const getNasaApi = async() => {
    let data = await fetch(url);

    let JSONobj = await data.json();
    return JSONobj;
}

let randomNum = Math.ceil(Math.random() * 100);
const URL = `https://swapi.dev/api/people/${randomNum}/`

const getStarWarsCharacter = async() => {
    let data = await fetch(URL);
    let JSONobj = await data.json();
    return JSONobj;

}

const uri = `http://www.omdbapi.com/?t=interstellar&apikey=${process.env.apikey}`

const getMovieInfo = async() => {
    let data = await fetch(uri);
    let JSONobj = await data.json();
    return JSONobj;
}

const deezerArtist = async() => {
    let url =  'https://api.deezer.com/search?q=kings%20of%20leon';
    let data = await fetch(url);
    let JSONobj = await data.json();
    return JSONobj;
}

module.exports = {
    getNasaApi,
    getStarWarsCharacter,
    getMovieInfo,
    deezerArtist
} 