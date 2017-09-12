express = require("express");
app = express();

// load up the generators
generators = require("./generators");

// make the client directory public
app.use(express.static("./client/public"));

app.get("/", (req, res) => {
    res.sendFile("client/index.html", {root: __dirname});
});

app.get("/qgen", (req, res) => {
    let q = [];
    for(let i=0; i <= req.query.num-1; i++){
        let thisq  = generators[req.query.sort]();
        q.push(thisq);
    }
    res.end(JSON.stringify(q));
});

app.listen(3490);
