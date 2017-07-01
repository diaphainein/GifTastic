

//create button function
function createButton(toons){
  //make a button
  var theTopic = toons;
  var newButton = $("<button>");
  //say what it is
  newButton.html(theTopic);
  newButton.attr("class", "topics btn btn-primary");
  //assign data
  newButton.attr("data-topic", theTopic);
  //put it in there
  $("#topics").append(newButton);
}


//create gifs function
function createGif(input){
  //clear current div
  $("#gifs").html("");

  // parse input into URL
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    input + "&api_key=dc6zaTOxFJmzC&limit=10";

  //ajax call: take input and generate 10 gifs based on input
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    var results = response.data;

    //loop through ajax return data to generate gifs
    for (var i = 0; i < results.length; i++) {
      //make new div
      var newGif = $("<div>");
      //create rating
      var p = $("<p>");
      p.html("Rating: " + results[i].rating.toUpperCase());
      var img = $("<img>"); 
      img.attr("class", "gif");
      //inject still url
      img.attr("src", results[i].images.fixed_height_still.url);
      //save still url
      img.attr("data-still", results[i].images.fixed_height_still.url);
      //save gif url
      img.attr("data-anim", results[i].images.fixed_height.url);
      //save state for animate function
      img.attr("data-state", false);
      newGif.append(p);
      newGif.append(img);
      $("#gifs").append(newGif);
    }
  });
}


//make gif moving or still
function animate(thing){
  //if aready still, animate. else, stop it.
  var state = $(thing).data("state");
    if(state==false){
      $(thing).data("state", true);
      $(thing).attr("src", $(thing).data("anim"));
    }
    else{
      $(thing).data("state", false);
      $(thing).attr("src", $(thing).data("still"));
    }
}

//init
//create button function
function createButton(toons){
  //make a button
  var theTopic = toons;
  var newButton = $("<button>");
  //say what it is
  newButton.html(theTopic);
  newButton.attr("class", "topics btn btn-primary");
  //assign data
  newButton.attr("data-topic", theTopic);
  //put it in there
  $("#topics").append(newButton);
}


//create gifs function
function createGif(input){
  //clear current div
  $("#gifs").html("");

  // parse input into URL
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" +
    input + "&api_key=dc6zaTOxFJmzC&limit=10";

  //ajax call: take input and generate 10 gifs based on input
  $.ajax({
    url: queryURL,
    method: "GET"
  }).done(function(response) {

    var results = response.data;

    //loop through ajax return data to generate gifs
    for (var i = 0; i < results.length; i++) {
      //make new div
      var newGif = $("<div>");
      //create rating
      var p = $("<p>");
      p.html("Rating: " + results[i].rating.toUpperCase());
      var img = $("<img>"); 
      img.attr("class", "gif");
      //inject still url
      img.attr("src", results[i].images.fixed_height_still.url);
      //save still url
      img.attr("data-still", results[i].images.fixed_height_still.url);
      //save gif url
      img.attr("data-anim", results[i].images.fixed_height.url);
      //save state for animate function
      img.attr("data-state", false);
      newGif.append(p);
      newGif.append(img);
      $("#gifs").append(newGif);
    }
  });
}


//make gif moving or still
function animate(thing){
  //if aready still, animate. else, stop it.
  var state = $(thing).data("state");
    if(state==false){
      $(thing).data("state", true);
      $(thing).attr("src", $(thing).data("anim"));
    }
    else{
      $(thing).data("state", false);
      $(thing).attr("src", $(thing).data("still"));
    }
}

//init
var toons = ["The Simpsons", "Bob's Burgers", "Family Guy", "Beavis and Butthead", "Rick and Morty", "Adventure Time", "Archer", "South Park"];
function init(arr){
  for(var i=0; i<arr.length; i++){
    createButton(arr[i]);
  }
}
init(toons);

//event listenerss
//click on a button
$("#topics").on("click", ".topics", function(){
  createGif($(this).data("topic"));
});

//click on a gif
$("#gifs").on("click", ".gif",function(){
  animate(this);
});

//create new button
$("#newButton").on("click", function(){
  var newVal = $("#textbox").val();
  if(newVal != ""){
    toons.push(newVal);
    createButton(newVal);
  }
})
function init(arr){
  for(var i=0; i<arr.length; i++){
    createButton(arr[i]);
  }
}
init(toons);

//event listenerss
//click on a button
$("#topics").on("click", ".topics", function(){
  createGif($(this).data("topic"));
});

//click on a gif
$("#gifs").on("click", ".gif",function(){
  animate(this);
});

//create new button
$("#newButton").on("click", function(){
  var newVal = $("#textbox").val();
  if(newVal != ""){
    pokemon.push(newVal);
    createButton(newVal);
  }
})