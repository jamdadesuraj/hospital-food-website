var $lightbox = $('<div id="lightbox"></div>');
var $image = $("<img>");
var $prevButton = $(
  '<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'
);
var $nextButton = $(
  '<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'
);
var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

// Add lightbox
$lightbox
  .append($image)
  .prepend($prevButton)
  .append($nextButton)
  .append($exitButton);
$("body").append($lightbox);

// Hide lightbox on default
$lightbox.hide();

// When an image is clicked
$(".img-link").click(function (event) {
  // Prevents default behavior
  event.preventDefault();
  // Adds href attribute to variable
  var imageLocation = $(this).attr("href");
  // Add the image src to $image
  $image.attr("src", imageLocation);
  // Fade in the lightbox
  $lightbox.fadeIn("slow");
});

// When the lightbox is clicked
$lightbox.click(function () {
  // Fade out the lightbox
  $(this).fadeOut("slow");
});

// When next button is clicked
$nextButton.click(function (event) {
  // Hide the current image
  $("#lightbox img").hide();
  // lightbox image location
  var $currentImgSrc = $("#lightbox img").attr("src");
  // Image with matching location of the lightbox image
  var $currentImg = $('.row img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $nextImg = $($currentImg.closest(".mb-4").next().find("img"));
  // All of the images in the gallery
  var $images = $(".row img");
  // If there is a next image
  if ($nextImg.length > 0) {
    // Fade in the next image
    $("#lightbox img").attr("src", $nextImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the first image
    $("#lightbox img").attr("src", $($images[0]).attr("src")).fadeIn(800);
  }
  // Prevents lightbox from being hidden
  event.stopPropagation();
});

// When previous button is clicked
$prevButton.click(function (event) {
  // Hide the current image
  $("#lightbox img").hide();
  // lightbox image location
  var $currentImgSrc = $("#lightbox img").attr("src");
  // Image with matching location of the lightbox image
  var $currentImg = $('.row img[src="' + $currentImgSrc + '"]');
  // Finds the next image
  var $prevImg = $($currentImg.closest(".mb-4").prev().find("img"));
  // All of the images in the gallery
  var $images = $(".row img");
  // If there is a prev image
  if ($prevImg.length > 0) {
    // Fade in the prev image
    $("#lightbox img").attr("src", $prevImg.attr("src")).fadeIn(800);
  } else {
    // Otherwise fade in the last image
    $("#lightbox img")
      .attr("src", $($images.slice(-1)).attr("src"))
      .fadeIn(800);
  }
  // Prevents lightbox from being hidden
  event.stopPropagation();
});

// When the exit button is clicked
$exitButton.click(function () {
  // Fade out the lightbox
  $("#lightbox").fadeOut("slow");
});
