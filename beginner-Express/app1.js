const express = require("express");
const app = express();

//response root page which is '/', we use GET because we are expecting user just visit our homepage, not doing POST like signup on form etc, GET just for Visiting.
app.get("/", function(req, res) {
  res.send("Hi BRO!");
});

app.get("/dogs", function(req, res) {
  console.log(`Wohoo, someone visited me!`);
  res.send("Awuuuuuuuuu");
});

app.get("/r/:subName", function(req, res) {
  const subName = req.params.subName;
  res.send(`Welcome to ${subName.toUpperCase()} subreddit`);
});

app.get("/r/:subName/comments/:id/:amount", function(req, res) {
  const subName = req.params.subName;
  const id = req.params.id;
  const amount = req.params.amount;
  res.send(
    `Welcome to ${subName.toUpperCase()} subreddit! with ${id} ID's and ${amount} of posts`
  );
});

app.get("/what", function(req, res) {
  res.send("what is this?");
});

app.get("*", function(req, res) {
  res.send("404 not found");
});

// ,listen is to start server , if we are in local env, we use only '.listen(3000, function(){})' as localhost:3000, but this is cloud9, its different. 'process' is 'document' object in html.
app.listen(process.env.PORT, process.env.IP, () => {
  console.log("Starting server!");
});
