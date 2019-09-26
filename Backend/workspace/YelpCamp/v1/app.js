const PORT = 12000;

var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

var campgrounds = [
  { name: "Salmon Creek", image: "http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg" },
  { name: "Granite Hill", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732873d7914acd5c_340.jpg" },
  { name: "Mountain Goat's Rest", image: "https://campone.com/wp-content/uploads/2017/12/FB_IMG_1537891494422.jpg" },
  { name: "Salmon Creek", image: "http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg" },
  { name: "Granite Hill", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732873d7914acd5c_340.jpg" },
  { name: "Mountain Goat's Rest", image: "https://campone.com/wp-content/uploads/2017/12/FB_IMG_1537891494422.jpg" },
  { name: "Salmon Creek", image: "http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg" },
  { name: "Granite Hill", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732873d7914acd5c_340.jpg" },
  { name: "Mountain Goat's Rest", image: "https://campone.com/wp-content/uploads/2017/12/FB_IMG_1537891494422.jpg" },
  { name: "Salmon Creek", image: "http://farm9.staticflickr.com/8605/16573646931_22fc928bf9_o.jpg" },
  { name: "Granite Hill", image: "https://pixabay.com/get/57e2d54b4852ad14f6da8c7dda793f7f1636dfe2564c704c732873d7914acd5c_340.jpg" },
  { name: "Mountain Goat's Rest", image: "https://campone.com/wp-content/uploads/2017/12/FB_IMG_1537891494422.jpg" }
];

app.get("/", (req, res) => {
  res.render("landing")
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = { name: name, image: image };
  campgrounds.push(newCampground);
  // redirect back to campgrounds page
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

app.listen(PORT, process.env.IP, () => {
  console.log("The YelpCamp Server Has started!!")
});