const express = require('express');
const app = express();

const path = require('path');
const glob = require('glob');

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

glob.sync('./pages/**/*.pug').forEach((file) => {
  const name = path.basename(file, '.pug');
  app.get('/' + name, (req, res) => {
    res.render('pages/' + name);
  });
});

app.get('/', (req, res) => {
  res.redirect('/index');
});

app.get('/index', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});