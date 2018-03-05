const express = require('express');
const app = express();

app.get('/', function(req,res){
  res.send('Hi there welcome to my assignment');
});

app.get('/speak/:animal', function(req,res){
  const sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof!",
    cat: "Meow"
  }
  const animal = req.params.animal.toLowerCase();
  let sound = sounds[animal];
  res.send(`The ${animal} says '${sound}'`);
});

app.get('/repeat/:word/:num', function(req,res){
  const word = req.params.word;
  const num = Number(req.params.num);
  let wordz = "";
  for(let i = 0; i < num; i++){
    wordz += `${word} `;
  }
  res.send(wordz);
});


app.get('*', function(req,res){
  res.send('404 not found');
});



app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Starting server!');
})

