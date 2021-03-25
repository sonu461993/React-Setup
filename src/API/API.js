import axios from 'axios';

const API =
{
    postRequest(url, data, callback)
    {
        axios.post(url)
        .then( (response) => {
            if(callback)
                callback(response.data);
        })
    },

    getRequest(url, callback)
    {
        axios.get(url)
        .then( (response) => {
            if(callback)
                callback(response.data);
        })
    }
}

export default API;