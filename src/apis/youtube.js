import axios from 'axios';


const KEY = 'AIzaSyBl5h2GuuL5fFXddTJ7p0FU326AfHbcpCU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        type: 'video',
        maxResults : 5,
        key : KEY
    }
});

