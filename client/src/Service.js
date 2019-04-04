const axios = require('axios');

const findWordsURL = 'api/matches/';
const relativatorURL = 'api/relativator/';

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
    static relativitor(letters) {
        return axios.get(relativatorURL, {
            params: {
                letters
            }
        });
    }
    
}

export default Service;