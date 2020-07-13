if (jQuery) {
  // alert("jQuery Loaded!");
  // alert("1. Select all divs and give them a purple background");
  $("div").css("backgroundColor", "purple");
  // alert("2. Select the divs with class \"highlight\" and make them 200px wide");
  $("div.highlight").css("width", "200px");
  // alert("3. Select the div with id \"third\" and give it a orange border");
  $("div#third").css("border", "2px solid orange");
  // alert("Bonus: Select the first div only and change its font color to pink");
  $("div:first-of-type").css("color", "pink");
  // $("div:first").css("color", "pink");
} else {
  alert("jQuery NOT Loaded!");
}


