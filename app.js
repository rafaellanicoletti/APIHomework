

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
// var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + APIKey + "&limit=10";


// Click add
$("#buttons-view").on("click", ".btn", function () {
    console.log($(this).data().name)
    // Storing our giphy API URL for a random cat 
    var topic = $(this).data().name
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + APIKey + "&limit=10";

    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })


        // After the data from the AJAX request comes back
        .then(function (response) {
            console.log(response.data.length);
            for (var x = 0; x < response.data.length; x++){
                // Saving the image_original_url property
                console.log(response.data[x].images.original.url)

                var imageUrl = response.data[x].images.original.url;
                console.log(imageUrl)

                // Creating and storing an image tag
                var topicImg = $("<img height= '300px' width= '300px' class= gif>");
                var gifImg = response.data[x].images.original_still.url
                
            
                // Setting the Image src attribute to topicImg
                topicImg.attr("src", gifImg);
                topicImg.attr("alt", "topic image");
                topicImg.attr("data-still", gifImg);
                topicImg.attr("data-state", "still");
                topicImg.attr("data-animate", imageUrl);
                topicImg.attr("class","gif");
                        

                // Prepending the Image to the images div
                $("#images").append(topicImg);
                } 
            
})});
            

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

    // This line will grab the text from the input box
    var topic = $("#topic-input").val().trim();
    // Topic is added to  array
    topics.push(topic);

    // calling renderButtons which handles the processing of our movie array
    btnCreation();
});

btnCreation();



$(document).on("click",".gif", function () {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    var state = $(this).attr("data-state");
    console.log(this);
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});