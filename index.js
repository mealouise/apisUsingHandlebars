const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

require('dotenv').config();


const retrieveApi = require('./lib/retrieveApi')

app.use(bodyParser.urlencoded({extended: false}))
//ignore data types and make everything a string
app.use(bodyParser.json());
//set it as json data to use with api's
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
    // let data = await retrieveApi.getStarWarsCharacter();
    // console.log(data);
    // let response = {
    //     name: data.name,
    //     birthyear: data.birth_year,
    //     homeworld: data.homeworld
    // }
    // res.render('starwars', { response })
    res.render('starwars');
})


app.post('/starwars', async(req,res) => {
    let number = req.body.number;

    let data = await retrieveApi.getStarWarsCharacter(number);
    console.log(data);
    let response = {
        name: data.name,
        birthyear: data.birth_year,
        homeworld: data.homeworld
   }
 res.render('starwars', { response })
})

app.get('/moviedatabase', async(req,res) => {
    // let data = await retrieveApi.getMovieInfo();
    // console.log(data);
    // let title = data.Title;
    // let year = data.Year;
    // let rating = data.Rated;
    // let runtime = data.Runtime;
    // let released = data.Released;
    // let genre = data.Genre;
    // let poster = data.Poster;
    // let plot = data.Plot
    // res.render('moviedatabase', { title, released, genre, poster, year, rating, runtime, plot})
    res.render('moviedatabase');
})

app.post('/moviedatabase', async(req,res) => {
    let film = req.body.film;
    let data = await retrieveApi.getMovieInfo(film);
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
    //short version giving you access to all the data and picking out e.g title on the handlebars page
    // let data = await retrieveApi.deezerArtist();
    // const musicInfo = data.data;
    // console.log(data);

   //longer version
    // let musicInfo = {
    //     title: data.data[0].title,
    //     preview: data.data[0].preview,
    //     link: data.data[0].link
    // }
    // let title = data.data[0].title
    // let preview = data.data[0].preview;
    // // console.log(preview)
    // let link = data.data[0].link;
    // // console.log(link)
    res.render('deezer')
})

app.post('/deezer', async(req,res) => {
    let artist = req.body.artist;
    let data = await retrieveApi.deezerArtist(artist);
    let musicInfo = data.data;
    res.render('deezer', { musicInfo })
})


app.listen(3005, () => {
    console.log("you are listening on port 3005")
});