const express = require("express");
const path = require("path");
const app = express();

app.set("port", (process.env.PORT || 3000));

//Set up static routes
app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res){
  res.sendFile(path.resolve(__dirname,"public","index.html"));
});

app.listen(app.get("port"), function() {
  console.log("Game on, port " + app.get("port"));
});
