import axios from "axios";

const URL = "http://localhost:3000";

const responseArtist = await axios.get(`${URL}/artists`);

console.log(responseArtist);