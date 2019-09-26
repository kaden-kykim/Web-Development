const   PORT        = 12000,
        DB_PORT     = 27020,
        DB_NAME     = "blog_demo",
        DB_OPT      = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:" + DB_PORT + "/" + DB_NAME, DB_OPT);

// POST - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// USER - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

var newUser = new User({
  email: "hermione@hogwarts.edu",
  name: "Hermione Granger"
});

newUser.posts.push({
  title: "How to bre polyjuice potion",
  content: "Just kidding. Go to potions class to learn it!"
});

// {
//   email: "asasd",
//   name: "asad",
//   posts: [
//     { title: "a", content: "A"},
//     { title: "b", content: "B"},
//     { title: "c", content: "C"}
//   ]
// }

// var newUser = new User({
//   email: "charlie@brown.edu",
//   name: "Charlie Brown"
// });
// newUser.save((err, user) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// var newPost = new Post({
//   title: "Reflections on Apples",
//   content: "They are delicious"
// });
// newPost.save((err, post) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

User.findOne({name: "Hermione Granger"}, (err, user) => {
  if (err) {
    console.log(err);
  } else {
    user.posts.push({
      title: "3 Things I really hate",
      content: "Voldemort. Voldemort. Voldemort."
    });
    user.save((err, user) => {
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    });
  }
});