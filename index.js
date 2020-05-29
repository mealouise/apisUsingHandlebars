const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');

require('dotenv').config();


const retrieveApi = require('./lib/retrieveApi')


app.use(express.static(path.join(__dirname, 'public')));

app.engine('.hbs', hbs ({
    defaultLayout: 'layout',
    extname: 'hbs'
}));

app.set('view engine', '.hbs');


app.get('/', async(req,res) => {
    res.send("server is working!!")
})


app.get('/nasa', async(req,res) => {
    let data = await retrieveApi.getNasaApi();
    console.log(data);
    let title = data.title;
    let explanation = data.explanation;
    let url = data.url;
    res.render('nasa', { title, explanation, url })
})

app.get('/starwars', async(req,res) => {
    let data = await retrieveApi.getStarWarsCharacter();
    console.log(data);
    let name = data.name;
    let birthyear = data.birth_year;
    let homeworld = data.homeworld;
    res.render('starwars', { name, birthyear, homeworld})
})

app.get('/moviedatabase', async(req,res) => {
    let data = await retrieveApi.getMovieInfo();
    console.log(data);
    let title = data.Title;
    let year = data.Year;
    let rating = data.Rated;
    let runtime = data.Runtime;
    let released = data.Released;
    let genre = data.Genre;
    let poster = data.Poster;
    let plot = data.Plot
    res.render('moviedatabase', { title, released, genre, poster, year, rating, runtime, plot})
})

app.get('/deezer', async(req,res) => {
    let data = await retrieveApi.deezerArtist();
    // console.log(data);
    let title = data.data[0].title
    let preview = data.data[0].preview;
    console.log(preview)
    let link = data.data[0].link;
    console.log(link)
    res.render('deezer', { title, preview, link })
})


app.listen(3005, () => {
    console.log("you are listening on port 3005")
});