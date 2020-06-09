const fetch = require("node-fetch");

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

const getNasaApi = async() => {
    let data = await fetch(url);

    let JSONobj = await data.json();
    return JSONobj;
}

// let randomNum = Math.ceil(Math.random() * 100);
// const URL = `https://swapi.dev/api/people/${number}/`

const getStarWarsCharacter = async(number) => {
    let data = await fetch(`https://swapi.dev/api/people/${number}/`);
    let JSONobj = await data.json();
    return JSONobj;

}



const getMovieInfo = async(film) => {
    let data = await fetch(`http://www.omdbapi.com/?t=${film}&apikey=${process.env.apikey}`);
    let JSONobj = await data.json();
    return JSONobj;
}

const deezerArtist = async(artist) => {
    // let url =  'https://api.deezer.com/search?q=kings%20of%20leon';

    let data = await fetch(`https://api.deezer.com/search?q=${artist}`);
    let JSONobj = await data.json();
    return JSONobj;
}

module.exports = {
    getNasaApi,
    getStarWarsCharacter,
    getMovieInfo,
    deezerArtist
} 