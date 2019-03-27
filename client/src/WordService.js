const axios = require('axios');

//const url = 'http://localhost:5003/api/matches/';//localhost
const url = 'api/matches/';//production

class WordService {

    // Find Words
    static findWords(letters) {
        return axios.get(url, {
            params: {
                letters
            }
        });
    }

    //Send Email
    static sendEmail(message){
        return axios.post(url, message);
    }
    
}

export default WordService;