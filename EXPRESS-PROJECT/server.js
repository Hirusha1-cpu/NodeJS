const express = require('express');

const f_r = require('./routes/f.router');
const m_r = require('./routes/m.router');

const app = express();

const PORT = 3001;

app.use((req, res, next)=>{
    const start = Date.now();
    next();
    //actions go here...
    const ms = Date.now() - start;
    console.log(`${req.method} ${req.baseUrl} ${req.url} ${ms}ms`);
    console.log(`${ms} ms`);
})

app.use(express.json());


app.use('/f',f_r);
app.use('/m', m_r);


app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`);
});

