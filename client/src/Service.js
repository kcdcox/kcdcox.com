const axios = require('axios');

const url = 'api/matches/';

class WordService {

    // Find Words
    static findWords(letters) {
        return axios.get(url, {
            params: {
                letters
            }
        });
    }
    
}

export default WordService;