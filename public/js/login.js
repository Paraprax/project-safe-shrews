var $userName = $("#userName");
var $userPassword = $("#userPassword");
var $loginSubmit = $("#loginSubmit");

var API = {
  login: function(data) {
    return $.ajax({
      type: "POST",
      url: "api/login",
      data: JSON.stringify(data)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  }
};
// checks the database for the username
var loginCheck = function() {
  let usernameVar = $userName.val().trim();
  let passwordVar = $userPassword.val().trim();
  console.log(userName);
  $.post("/api/user/",
  {username: usernameVar, password: passwordVar},
  function(result)  {
    if(result.length > 0) {
      loggedIn(result[0].id);
    } else {
      alert('Invalid Login');
    }
  });
};

// funtion to validate a login has been attempted
var loginValidate = function(event) {
  event.preventDefault();
  if ($userName.val() == "" || $userPassword.val() == "") {
    alert("* fields cannot be empty");
  } else {
    loginCheck();
  }
};

function loggedIn(userID) {
  window.location.href = "/user/profile/" + userID;
}

$loginSubmit.on("click", loginValidate);
