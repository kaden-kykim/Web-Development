const PORT = 12000;

var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animalName", function(req, res) {
  var sounds = {
    pig: "Oink",
    cow: "Moo",
    dog: "Woof Woof!",
    cat: "I hate you human",
    goldfish: "..."
  }

  var animalName = req.params.animalName.toLowerCase();
  var sound = sounds[animalName];
  if (sound != null) {
    res.send("The " + animalName + " says '" + sound + "'");
  } else {
    res.send("Sorry, page not found...What are you doing with your life?");
  }
});

app.get("/repeat/:text/:num", function(req, res) {
  var num = Number(req.params.num);
  var text = "";
  for (var i = 0; i < num; ++i) {
    text += req.params.text + " ";
  }
  res.send(text);
});

app.get("*", function(req, res) {
  res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(PORT, process.env.IP, function() {
  console.log("Server is running!");
});



