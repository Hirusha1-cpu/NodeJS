
const {send, read} = require('./internals');
// const request = require('./internals/request');
// const response = require ('./internals/response');
const {REQUEST_TIMEOUT} = require('./internals/request');

function makeRequest(url, data){
    send(url, data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

console.log(require.cache);