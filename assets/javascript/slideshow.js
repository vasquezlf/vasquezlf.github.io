
//  Slideshow Activity
//  ** SOLUTION **

// TODO: Put links to our images in this image array.
var images = ["assets/images/capstone.png", "assets/images/soloproject.png", "assets/images/groupproject.png"];
var projectTitle = ["ClickedIn", "Ohm", "Tree Logger"]
var links = ["https://guarded-hamlet-72730.herokuapp.com/", "https://group-calendar-app.firebaseapp.com/", "https://mighty-taiga-95027.herokuapp.com/"]

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#previous").click(previousImage);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#next").click(nextImage);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {

  $("#image-holder").html(`<img src=${images[count]} id=image-${count}>`);

}

// function addLink(){
//   $(`#image-${count}`).html(`<a href=${link[count]}>`);
// }

function nextImage() {
  console.log("nextImage");
  //  TODO: Increment the count by 1.
  count++;

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
  displayImage()
}

function previousImage() {
  console.log("previousImage");

  //  TODO: Decrement the count by 1.
  count--;

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count <= -1) {
    count = 2;
  }
  displayImage();
}


// This will run the display image function as soon as the page loads.
displayImage();
