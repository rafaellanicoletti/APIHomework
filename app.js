

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
var APIKey = FmlEOGsL33Fa0IBUgxcI5J9meYsV0kkK;
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FmlEOGsL33Fa0IBUgxcI5J9meYsV0kkK&q=&limit=25&offset=0&rating=G&lang=en";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});

// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.

function btnCreation() {

// Looping through the array of movies
for (var i = 0; i < topics.length; i++) {
    // Then dynamicaly generating buttons for each movie in the array.
    var btn = $("<button type='button' class='btn btn-outline-*'>");
    btn.addClass("topic");
    // Adding a data-attribute with a value of the movie at index i
    btn.attr("data-name", topics[i]);
    btn.text(movies[i]);
    // Adding the button to the HTML
    $("#buttons-view").append(a);
}
      }

// When the user clicks on a button, the page should grab 10 static, non - animated gif images from the GIPHY API and place
// them on the page.

// This function handles events where one button is clicked
$("#add-topic").on("click", function (event) {
    // event.preventDefault() prevents the form from trying to submit itself.
    // We're using a form so that the user can hit enter instead of clicking the button if they want
    event.preventDefault();

    // This line will grab the text from the input box
    var movie = $("#movie-input").val().trim();
    // The movie from the textbox is then added to our array
    movies.push(movie);

    // calling renderButtons which handles the processing of our movie array
    renderButtons();
});



// < !--Retrieved data will be dumped here-- >
    <div class="city"></div>
    <div class="wind"></div>
    <div class="humidity"></div>
    <div class="temp"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script type="text/javascript">
        // This is our API key
        var APIKey = "166a433c57516f51dfab1f7edaed8413";
    
        // Here we are building the URL we need to query the database
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
          "q=Bujumbura,Burundi&units=imperial&appid=" + APIKey;
    
        // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
            url: queryURL,
        method: "GET"
      })
        // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

            // Log the queryURL
            console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        $(".temp").text("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });
  </script>
</body >

</html >

