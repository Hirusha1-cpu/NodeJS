const path = require('path');

function g_m(req, res){
    res.render('messages',{
        title:' messages to my friend',
        friend:'sexxxx'
    })
    
  //  res.sendFile(path.join(__dirname,'..', 'public','images', 'peakpx.jpg'))
}

function p_m(req, res){
    console.log('Updating messages...');
}

module.exports = {
    g_m,
    p_m,
}