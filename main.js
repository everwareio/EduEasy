express = require("express");
app = express();

// load up the generators
generators = require("./generators");

app.get("/", (req, res) => {
    res.send("EduEasy");
});

app.listen(3490);
