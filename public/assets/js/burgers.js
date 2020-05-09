$(function() {
    $(".change-devoured").on("click", function(event) {
      const id = $(this).data("id");
      const newDevoured = $(this).data("newdevoured");
      console.log("New devoured state: " + newDevoured);
  
      const newDevouredState = {
        devoured: newDevoured
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devoured to", newDevoured);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      const newBurger = {
        bur_name: $("#bur").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("Created new burger");
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      const id = $(this).data("id");
  
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("Deleted burger", id);
          location.reload();
        }
      );
    });
  });