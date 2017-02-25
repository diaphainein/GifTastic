var toons = ["The Simpsons", "Bob's Burgers", "Family Guy", "Beavis and Butthead", "Rick and Morty", "Adventure Time", "Archer", "South Park"];

      // displayGifs function re-renders the HTML to display the appropriate content
      function displayGifs() {

        var toon = $(this).attr("data-toon");
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
        toon + "&api_key=dc6zaTOxFJmzC&limit=10";

        // Creating an AJAX call for the specific toon button being clicked
        $.ajax({
          url: queryURL,
          method: "GET"
        }).done(function(response) {

          // Creating a div to hold the gifs
          var toonDiv = $("<div class='gifs'>");

          // Storing the rating data
          var rating = response.rating;

          // Creating an element to have the rating displayed
          var para = $("<p>").text("Rating: " + rating);

          // Displaying the rating
          toonDiv.append(para);

          // Putting the gifs above the previous gifs
          $("#gif-view").prepend(toonDiv);
        });

      }

      // Function for displaying movie data
      function renderButtons() {

        // Deleting the gifs prior to adding new gif buttons so we don't get repeat buttons
        $("#buttons-view").empty();

        // Looping through the array of cartoon gifs
        for (var i = 0; i < toons.length; i++) {

          // Then dynamicaly generating buttons for each toon in the array
          var a = $("<button>");
          // Adding a class of gif to our button
          a.addClass("gif");
          // Adding a data-attribute
          a.attr("data-toon", toons[i]);
          // Providing the initial button text
          a.text(toons[i]);
          // Adding the button to the buttons-view div
          $("#buttons-view").append(a);
        }
      }

    // This function handles events where a toon button is clicked
      $("#add-toon").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var toon = $("#toon-input").val().trim();

        // Adding toon from the textbox to our array
        toons.push(toon);

        // Calling renderButtons which handles the processing of our toons array
        renderButtons();
      });

      // Adding a click event listener to all elements with a class of "toon"
      $(document).on("click", ".toon", displayGifs);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();

      // handler for the still and animated actions
      $(".gif").on("click", function() {
        console.log(this);
        var state = $(this).attr("data-state");

        if (state == "still") {
        $(this).attr("data-state", "animate");
        $(this).attr("src", $(this).attr("data-animate"));
        console.log(this);
      }

      else {
        $(this).attr("data-state", "still");
        $(this).attr("src", $(this).attr("data-still"));
      }

    });