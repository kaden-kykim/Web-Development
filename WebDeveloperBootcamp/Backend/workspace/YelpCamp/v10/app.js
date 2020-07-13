const   PORT            = 12000,
        DB_PORT         = 27020,
        DB_NAME         = "/yelp_camp_" + __dirname.substring(__dirname.lastIndexOf('/') + 1),
        DB_OPT          = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

var     express         = require("express"),
        app             = express(),
        bodyParser      = require("body-parser"),
        mongoose        = require("mongoose"),
        passport        = require("passport"),
        LocalStrategy   = require("passport-local"),
        methodOverride  = require("method-override"),
        Campground      = require("./models/campground"),
        Comment         = require("./models/comment"),
        User            = require("./models/user"),
        seedDB          = require("./seeds");

// Requiring routes
var     commentRoutes       = require("./routes/comments"),
        campgroundRoutes    = require("./routes/campgrounds"),
        indexRoutes         = require("./routes/index");

mongoose.connect("mongodb://localhost:" + DB_PORT + DB_NAME, DB_OPT);
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
// seedDB(); // seed the database

// PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret: "Once again Kaden wanna say something!",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.use("/", indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(PORT, process.env.IP, () => {
    console.log("The YelpCamp Server Has started!");
});