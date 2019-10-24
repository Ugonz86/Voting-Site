$(document).ready(function () {
  var usersAge = parseInt(prompt("Please enter your age: "));
  if (usersAge < 18) {
    $('#under-age').show();
  }
  else {
    $('#over-age').show();
  }



});
