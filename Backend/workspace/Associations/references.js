const   PORT        = 12000,
        DB_PORT     = 27020,
        DB_NAME     = "blog_demo_2",
        DB_OPT      = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:" + DB_PORT + "/" + DB_NAME, DB_OPT);

var Post = require("./models/post");
var User = require("./models/user");

// Post.create({
//   title: "How to cook the best burger pt. 4",
//   content: "ASDFERTGERFD"
// }, (err, post) => {
//   User.findOne({email: "bob@gmail.com"}, (err, foundUser) => {
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save((err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       });
//     }
//   });
// });

// User.create({
//   email: "bob@gmail.com",
//   name: "Bob Belcher"
// });

// Find user
// find all posts for that user

User.findOne({ email: "bob@gmail.com" }).populate("posts").exec((err, user) => {
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
});