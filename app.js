// // <!-- //Before you can make any part of your site work, you need to create an array of strings, each one related to a topic that
// interests you.Save it to a variable called topics.

// Your app should take the topics in this array and create buttons in your HTML.

// Try using a loop that appends a button for each string in the array.

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

var topics = ["Louis Vuitton" , "Chanel", "Fendi", "Moschino" , "Gucci"];


// Your app should take the topics in this array and create buttons in your HTML.
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=FmlEOGsL33Fa0IBUgxcI5J9meYsV0kkK&q=&limit=25&offset=0&rating=G&lang=en";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response);
});


