const axios = require('axios');

const findWordsURL = 'api/matches/';
const relativatorURL = 'api/relationships/';

class Service {

    // Find Words
    static findWords(letters) {
        return axios.get(findWordsURL, {
            params: {
                letters
            }
        });
    }

    // Relativator
    static relativator(wordOne, wordTwo) {
        return axios.get(relativatorURL, {
            params: {
                wordOne, wordTwo
            }
        });
    }
    
}

export default Service;