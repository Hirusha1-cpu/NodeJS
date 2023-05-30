const http = require('https');
const req = http.request('https://www.google.com',(res)=>{
    res.on('data',(chunk)=>{
        console.log(`DAta chunk ${chunk}`);
    });
    res.on('end',()=>{
        console.log('The request has ended');
    
    })
});

req.end();