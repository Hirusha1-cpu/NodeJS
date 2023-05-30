const { write } = require('fs');
const http = require('http');

const PORT = 3001;
 
const server = http.createServer();

const f = [
    {
        id:0,
        name: 'hirusha'
    },
    {
        id:1,
        name: 'gulshan'

    }
]

server.on('request',(req, res)=>{
    const items = req.url.split('/');
    // /f/1 => ['', 'f','2']
    if(req.method ==='POST' && items[1] === 'f'){
        req.on('data', (data)=>{
            const f1 = data.toString();
            console.log('Request:', f1);
            f.push(JSON.parse(f1));
        });
        
        req.pipe(res);

    }
    else if(req.method === 'GET' && items[1] ==='f'){

       // res.writeHead(200, {'Content-Type': 'application/json'} );
       res.statusCode = 200;
       res.setHeader('Content-Type', 'application/json');
       if(items.length === 3){
        const fIndex = Number(items[2]);
        res.end(JSON.stringify(f[fIndex]))

       }else{
        res.end(JSON.stringify(f));
       
       }
        
     
    }else if(req.method ==='GET' &&  items[1] === 'm'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Joke Generator</title></head>');
        res.write('<body><h1>Joke Generator</h1>');
        res.write('<p>This is a web service that generates a random joke</p>');
        res.write('<p>It uses <a href="https://codegeex.cn">CodeGeeX</a> for jokes</p>');
        res.write('<p>If you need a joke, go <a href="/">back</a></p>');
        res.write('</body>');
        res.write('</html>');
        res.end();
    }else{
        res.statusCode = 404;
        res.end();
    }
})

server.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`);
});