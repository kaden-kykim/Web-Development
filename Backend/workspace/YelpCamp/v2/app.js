const PORT = 12000;
const DB_PORT = 27020;

var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost:" + DB_PORT + "/yelp_camp", {useNewUrlParser: true});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// SCHEMA SETUP
var campgroundsSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundsSchema);

// Campground.create(
//   {
//     name: "Granite Hill",
//     image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
//     description: "This is a huge granite hill, no bathrooms. No water. Beautiful granite!"
//   },
//   (err, campground) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND: ");
//       console.log(campground);
//     }
//   }
// );

app.get("/", (req, res) => {
  res.render("landing")
});

// INDEX - show all campground
app.get("/campgrounds", (req, res) => {
  // Get all campgrounds from DB
  Campground.find({}, (err, allCampgrounds) => {
    if (err) {
      console.log(err);
    } else {
      res.render("index", {campgrounds: allCampgrounds});
    }
  });
});

// CREATE - add new campground to DB
app.post("/campgrounds", (req, res) => {
  // get data from form and add to campgrounds array
  var name = req.body.name;
  var image = req.body.image;
  var desc = req.body.description;
  var newCampground = { name: name, image: image, description: desc };

  // Create a new campground and save to DB
  Campground.create(newCampground, (err, newlyCreated) => {
    if (err) {
      console.log(err);
    } else {
      // redirect back to campgrounds page
      res.redirect("/campgrounds");    
    }
  });
});

// NEW - show form to create new campground
app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id", (req, res) => {
  // find the campground with provided ID
  Campground.findById(req.params.id, (err, foundCampground) => {
    if (err) {
      console.log(err);
    } else {
      // render show template with that campground
      res.render("show", {campground: foundCampground});
    }
  });
  
  
});

app.listen(PORT, process.env.IP, () => {
  console.log("The YelpCamp Server Has started!!");
});