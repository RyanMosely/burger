$(function() {

    

    

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("doodoo doooo")
    
        var newBurger = {
          burger_name: $("#bu").val().trim(),
          //devoured: 0
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

      $(".devour-burger").on("click", function(event) {

        console.log("burger.js testeroo dude")
    
        var id = $(this).data("id");
        //var devoured = $(this).data("newsleep");
    
        var devouredState = {
          devoured: 1
        };

        console.log(devouredState);
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: devouredState
        }).then(
          function() {
            console.log("changed sleep to", devouredState);
            // Reload the page to get the updated list
            location.reload();

          }
        );
      });

});

