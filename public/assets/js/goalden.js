// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devouredBurger").on("click", function(event) {
    var id = $(this).data("id");
    

    var devour = {
     devoured: 1
    };
    console.log(id)
console.log(devour)
    // Send the PUT request.
    $.ajax("/burger/" + id, {
      type: "PUT",
      data: devour
    }).then(
      function() {
        console.log("change to devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".formUpdate").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger: $("#ca").val().trim(),
      devoured: 0
    };

    console.log(newBurger)
    // Send the POST request.
    $.ajax("/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new cat");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // $(".delete-cat").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burger/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted cat", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
