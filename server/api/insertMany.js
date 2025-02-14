import { artistArray } from '../../front-end/src/assets/database/artists.js'
import { songsArray } from '../../front-end/src/assets/database/songs.js';
import { db } from './connect.js'

const newArtistArray = artistArray.map((currentArtistaObj) => {
    const newArtistObj = {...currentArtistaObj};
    delete newArtistObj.id;

    return newArtistObj;    
})

const newSongsArray = songsArray.map((currentSongObj) => {
    const newSongObj = {...currentSongObj};
    delete newSongObj.id;

    return newSongObj;    
})


const resonse = await db.collection("artists").insertMany(newArtistArray);
console.log(resonse);