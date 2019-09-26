var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest",
    image: "https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Bacon ipsum dolor amet corned beef brisket t-bone, turducken landjaeger short ribs pork cow salami. Shankle bresaola jowl tri-tip brisket ham burgdoggen cow flank tongue beef pork loin. Beef rump pig shoulder filet mignon chuck. Swine spare ribs bresaola, ham hock tongue pastrami turkey ribeye shank drumstick jowl pork porchetta. Tail pig ribeye, jowl bresaola t-bone beef chicken. Tail drumstick tri-tip, meatloaf shoulder swine t-bone salami pork chop cow corned beef alcatra shank landjaeger venison. Bacon jerky turkey andouille."
  },
  {
    name: "Canyon Floor",
    image: "https://images.unsplash.com/photo-1497900304864-273dfb3aae33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1388&q=80",
    description: "Hamburger sausage fatback, ham tri-tip frankfurter beef ribs turducken pork loin strip steak kielbasa. Leberkas pork loin brisket short loin drumstick. Pork loin pig landjaeger ball tip picanha, ribeye short loin drumstick spare ribs strip steak cow fatback pancetta tenderloin leberkas. Rump andouille jowl tail meatball tri-tip landjaeger swine short ribs shankle turducken boudin leberkas. Venison tongue strip steak pastrami brisket boudin short loin meatball flank alcatra cow. Pork belly kielbasa jowl meatball brisket jerky short loin sausage spare ribs filet mignon tri-tip pork loin tail."
  },
  {
    name: "Desert Mesa",
    image: "https://images.unsplash.com/photo-1455763916899-e8b50eca9967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    description: "Swine pastrami burgdoggen porchetta short loin drumstick bacon tongue pork belly shoulder frankfurter hamburger pork loin prosciutto. Corned beef chicken frankfurter t-bone porchetta picanha ham hock, tongue short loin rump ball tip pork chop shankle. Cupim short ribs kielbasa, flank jowl leberkas drumstick. Pastrami picanha spare ribs pork loin jerky kevin. Tail meatball pork, pork loin buffalo tenderloin corned beef shoulder kevin. Jowl andouille tenderloin, brisket frankfurter tri-tip ham hock chuck cow bresaola kevin meatloaf buffalo shoulder short loin. Landjaeger meatloaf ground round pig."
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