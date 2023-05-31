const express = require('express');
const path = require('path');

const f_r = require('./routes/f.router');
const m_r = require('./routes/m.router');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

const PORT = 3001;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const ms = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl} ${req.url} ${ms}ms`);
  console.log(`${ms} ms`);
});

app.use('/site', express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, res)=>{
    res.render('index', {
        title: 'Express Im Hirusha',
        caption: 'Hirusha'
    });
})
app.use('/f', f_r);
app.use('/m', m_r);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
