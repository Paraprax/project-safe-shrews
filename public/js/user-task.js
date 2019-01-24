
 var $userID = $("#userId").data("id");

var $submit = $('#submit');


var API = {
    newTask: function (data) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "/api/tasks",
            data: JSON.stringify(data)
        });
    },
    updateTask: function (data) {
        return $.ajax({
            type: "PUT",
            url: "/api/tasks" + $userID,
            data: JSON.stringify(data)
        })
    }
}


var taskFormSubmit = function (event) {
    event.preventDefault();
    var $taskName = $("#task-name").val();
    var $measurement = $("#measurement").val();
    var $goal = $("#goal").val();
   
    
    var tasks = {
        userid: $userID,
        task: $taskName,
        unit: $measurement,
        target: $goal,
        completed: 0
    };
    console.log(JSON.stringify(tasks))

    API.newTask(tasks).then(function () {
        alert("worked");
    });
};

$submit.on("click", taskFormSubmit); 