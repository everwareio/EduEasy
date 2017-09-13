const express = require("express");
let app = express();
let port = process.env.PORT || 8081;
// load up the generators
generators = require("./generators");

// make the client directory public
app.use(express.static("./client/public"));

app.get("/", (req, res) => {
    res.sendFile("client/index.html", {root: __dirname});
});

app.get("/qgen", (req, res) => {
    if(req.query.num <= 1000){
        let q = [];
        for(let i=0; i <= req.query.num-1; i++){
            let thisq  = generators[req.query.sort]();
            q.push(thisq);
        }
    } else {
        q = [["Don't break my server please, less questions", ":)"]];
    }   
    res.end(JSON.stringify(q));
});

app.listen(port, ()=>{
    console.log("Listening on port " + port);
});
