const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
let Items = ["Buy Food", "Cook Food", "Eat Food"];
let WorkItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {

    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    
    var day = today.toLocaleDateString("en-US", options)
    
    
    res.render("list", { listTitle: day, newListItems: Items });


});

app.post("/",function(req,res){
    var Item = req.body.newItem;

    Items.push(Item);

    res.redirect("/");
});

app.get("/work",function(req,res){
    res.render("list", { listTitle: "WorkList", newListItems: WorkItems});
});

app.post("/work",function(req,res){
    let Items = req.body.newItem;
    WorkItems.push(Items);
    res.redirect("/work");

});

app.listen(port, function () {
  console.log(`Example app listening at http://localhost:${port}`);
});
