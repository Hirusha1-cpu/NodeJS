const path = require('path');

function g_m(req, res){
    
    res.sendFile(path.join(__dirname,'..', 'public','images', 'peakpx.jpg'))
}

function p_m(req, res){
    console.log('Updating messages...');
}

module.exports = {
    g_m,
    p_m,
}