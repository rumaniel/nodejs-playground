const { request } = require('undici');

request('http://www.google.com')
    .then((response) => {
        return response.body.text();
    }).then((body) => {
        console.log(body);
    });
