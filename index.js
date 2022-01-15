const fs = require('fs');
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended:true}));
const activities = require("./activities.json");

app.get("/", function (req, res) {
    res.sendFile( __dirname + "/index.html" );
});
app.post("/autumn", function (req, res){
    fs.writeFile(__dirname + "/data.txt", req.body.activity, function(){
        res.send("投稿完了");
    });
});

app.get("/update", function (req, res) {
    console.log(activities[0].activity);
    res.send(activities);
})

app.listen(8080, function()  {
    console.log("Listening on localhost port 8080");
});