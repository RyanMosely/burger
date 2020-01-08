$(function() {

    

    

    $(".create-form").on("click", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("doodoo doooo")
    
        var newBurger = {
          burger_name: $("#bu").val().trim(),
          devoured: false
        };

        console.log(newBurger)
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });

});