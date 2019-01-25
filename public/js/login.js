var $userName = $("#userName");
var $userPassword = $("#userPassword");
var $loginSubmit = $("#loginSubmit");

var API = {
    login: function (data) {
        return $.ajax({
            type: "POST",
            url: "api/login",
            data: JSON.stringify(data)
        });
    },
    getExamples: function () {
        return $.ajax({
            url: "api/examples",
            type: "GET"
        });
    }
};
// checks the database for the username
var loginCheck = function () {
    userName = $userName.val().trim()
    console.log(userName)
    $.get("/api/user/" + userName, function (data) {
        
        if (data.length == 0){
            alert("user does not exist")
        }
        else if($userPassword.val() == data[0].Password){
            alert("logged in");
            loggedIn(data[0].id); 
        }
        else{
            alert("password incorrect");
        };
    })

};

// funtion to validate a login has been attempted
var loginValidate = function (event) {
    event.preventDefault();
    if (($userName.val() == "") || ($userPassword.val() == "")) {
        alert("* fields cannot be empty");
    }
    else {
        loginCheck();
    }
};

function loggedIn(userID){
    window.location.href="/user/login/" + userID;  
}

$loginSubmit.on("click", loginValidate);