var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "blah blah blah"
  },
  {
    name: "Canyon Floor",
    image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80",
    description: "blah blah blah"
  },
  {
    name: "Desert Mesa",
    image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "blah blah blah"
  }
];

function seedDB() {
  // Delete all campgrounds
  Campground.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    console.log("removed campgrounds!");

    // add a few campgrounds
    data.forEach((seed) => {
      Campground.create(seed, (err, campground) => {
        if (err) {
          console.log(err);
        } else {
          console.log("added a campground");
          // add a few comments
          Comment.create(
            {
              text: "This place is great, but I wish there was internet",
              author: "Homer"
            }, (err, comment) => {
              if (err) {
                console.log(err);
              } else {
                campground.comments.push(comment);
                campground.save();
                console.log("Created new comment");
              }
            }
          );
        }
      })
    });
  });
}

module.exports = seedDB;