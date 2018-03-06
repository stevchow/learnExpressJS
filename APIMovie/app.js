const express = require('express');
const app = express();
const request = require('request');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
  res.render('search');
});

app.get('/results', function(req,res){
  const query = req.query.searchInput;
  const url = "http://omdbapi.com/?s="+query +"&apikey=thewdb";
  request(url, function(err, response, body){
  if(!err && response.statusCode === 200){
    const data = JSON.parse(body);
    res.render('results', {data:data});
  }
});
});

app.get('*', function(req,res){
  res.send('404 not found');
});


app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Starting server!');
})
