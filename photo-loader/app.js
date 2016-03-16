$(window).ready(function(){

  $("button#create-photo").on("click", function(){
    // alert("crete that photo!")

    var photoUrl = $("#new-photo-url").val();

    console.log("Creating ", photoUrl);


    // post json to a url

    jsonObject = {
      title: "Taco Spin",
      url: photoUrl,
      thumbnailUrl: photoUrl
    }

    $.ajax({
      type: "POST",
      url: "http://jsonplaceholder.typicode.com/photos/",
      dataType: 'json',
      data: JSON.stringify(jsonObject)
    })
    .done(function(json){
      console.log(json)

      // If this was a real server, it would store this and we could display
      alert("Created: " + json.id);
    })

  })

  var loadPhoto = function(photoId){

    console.log("Start load photo")

    $(".load-that-photo").append(
      $("<i class='fa fa-spinner fa-pulse fa-lg'></i>")
    )

    // get the value of the text field
    // make request to http://jsonplaceholder.typicode.com/photos/:id
    // on complete show img tag from url field


    $.getJSON("http://jsonplaceholder.typicode.com/photos/" + photoId)
     .done(function(json){
       console.log(json)
       console.log("url", json.url, "html", "<img src='" + json.url + "'>")

       var newImgTag = $("<img  src='" + json.url + "'>");
       var photoHolder = $("#photos");
       photoHolder.html("");
       newImgTag.appendTo(photoHolder);

       $(".load-that-photo i").remove();
     })

  }

  $("button#load-photo").on("click", function(){
    var photoId = $("#photo-id").val()
    loadPhoto(photoId)
  })

  $("button#load-albums").on("click", function(){
    console.log("loading albums");


    $(".load-those-albums").append(
      $("<i class='fa fa-spinner fa-pulse fa-lg'></i>")
    )

    var photoHolder = $("#photos");
    photoHolder.html("");

    $.getJSON("http://jsonplaceholder.typicode.com/photos").done(function(jsonArray){
      console.log(jsonArray);

      // Create an img tag for each json object with thumbnailURl

      jsonArray.slice(1, 6).forEach(function(json){

        console.log("Start create image tag")
        var newImgTag = $("<img data-id='" + json.id + "' class='photo' src='" + json.thumbnailUrl + "'>")

        // put newImgTag inside #photos

        newImgTag.appendTo(photoHolder);

        console.log("done!")

      })

      $(".photo").on("click", function(){

        var photoId = $(this).data("id");

        // intent: behave as if we typed in the photo id
        // and show the image

        loadPhoto(photoId)

      })

      console.log("done!")
      $(".load-those-albums i").remove();


    })



  });
})
