
 var $userID = $("#userId").data("id");

var $updateButton = $('.update');


var API = {
   
    updateTask: function (updateData) {
        return $.ajax({
            type: "PUT",
            url: "/api/tasks/" ,
            data: (updateData)
        })
    },

    displayTask: function (){
        return $.ajax({
            url: "/api/profile/" + $userID,
            type: "GET"
        });
    }
}


var update = function(){
    $taskID = $(this).data("id");
    $taskValue = $(this).val();
    console.log($taskValue)
    $taskUpdate = parseInt($('#' + $taskID).val());
    var updateData = {
        id: $taskID,
        completed: $taskUpdate
    }
    $('#' + $taskID).val('')
    API.updateTask(updateData).then(function() {
        location.reload(); 
        
    });
};


$updateButton.on("click", update); 
