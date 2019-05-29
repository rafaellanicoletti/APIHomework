

// When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY API and place
// them on the page.


// When the user clicks one of the still GIPHY images, the gif should animate.If the user clicks the gif again, it should
// stop playing.

// Under every gif, display its rating(PG, G, so on).

// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.
// Add a form to your page that takes a value from a user input box and adds it to your topics array.Then make a function
//     call that takes each topic in the array and remakes the buttons on the page.
// Deploy your assignment to Github Pages.
//     Rejoice! You just made something really cool. -- >

//create an array of topics.
var topics = ["Louis Vuitton" , "Chanel", "Fendi", "Moschino" , "Gucci"];


// API key.
var APIKey = "FmlEOGsL33Fa0IBUgxcI5J9meYsV0kkK";
var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIKey + "&limit=10";


// Click add
$("#topic-input").on("click", function () {

    // Storing our giphy API URL for a random cat image
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + APIKey + "&limit=10";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })

        // After the data from the AJAX request comes back
        .then(function (response) {
            // Saving the image_original_url property
            var imageUrl = response.data.image_original_url;

            // Creating and storing an image tag
            var topicImg = $("<img>");

            // Setting the Image src attribute to topicImg
            topicImg.attr("src", imageUrl);
            topicImg.attr("alt", "topic image");

            // Prepending the Image to the images div
            $("#images").prepend(randomImg);
        });
});



// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.

function btnCreation() {

    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {
    var btn = $("<button type='button' class='btn btn-dark'>");
    // Adding a data-attribute with a value of the movie at index i
    btn.attr("data-name", topics[i]);
    btn.html(topics[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(btn);
}
      }

// When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY API and place
// them on the page.

// This function handles events where one button is clicked
$("#add-topic").on("click", function (event) {
    event.preventDefault();
    // This line will grab the text from the input box
    var topic = $("#topic-input").val().trim();
    // Topic is added to  array
    topics.push(topic);

    // calling renderButtons which handles the processing of our movie array
    btnCreation();
});

btnCreation();


