const   PORT            = 12000,
        DB_PORT         = 27020,
        DB_NAME         = "/auth_demo_app",
        DB_OPT          = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

var     express                 = require("express"),
        mongoose                = require("mongoose"),
        passport                = require("passport"),
        bodyParser              = require("body-parser"),
        User                    = require("./models/user"),
        LocalStrategy           = require("passport-local"),
        passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost:" + DB_PORT + DB_NAME, DB_OPT);

var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require("express-session")({
    secret: "Kaden want to say something!",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =======================
// ROUTES
// =======================

app.get("/", (req, res) => {
    res.render('home');
});

app.get("/secret", isLoggedIn, (req, res) => {
    res.render('secret');
});

// AUTH ROUTES

// show sign up form
app.get("/register", (req, res) => {
    res.render("register");
});

// handling user sign up
app.post("/register", (req, res) => {
    User.register(new User({ username: req.body.username}), req.body.password, (err, user) => {
        if (err) {
            console.log(err);
            return res.render('register');
        } else {
            // For twitter: passport.authenticate("twitter")....
            passport.authenticate("local")(req, res, () => {
                res.redirect("/secret");
            });
        }
    });
});

// LOGIN/OUT ROUTES

// render login form
app.get("/login", (req, res) => {
    res.render("login");
});

// login logic => MIDDLEWARE!
app.post("/login", passport.authenticate("local", {
    successRedirect: "/secret",
    failureRedirect: "/login"
}), (req, res) => {
});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

app.listen(PORT, process.env.IP, () => {
    console.log("Server started...");
});
