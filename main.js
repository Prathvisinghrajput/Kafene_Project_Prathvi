$(document).ready(function () {
  if (localStorage.getItem("loginStatus") == "true") {
    location.assign("ordered.html");
  }
  let loginForm = window.document.getElementById("loginform");
  loginForm.onsubmit = function (a) {
    a.preventDefault();
    let logincredential = {
      username: this.username.value,
      password: this.password.value,
    };
    if (logincredential.username === logincredential.password) {
      alert("Login Successful!!");
      window.localStorage.setItem("loginStatus", true);
      location.replace("ordered.html");
    } else {
      alert(
        `Please Enter Valid Credentials ${logincredential.username} ${logincredential.password}`
      );
    }
  };
  $(".Heading").click(function (b) {
    b.preventDefault();
    $(".start").removeClass("start");
    $(e.target).addClass("start");
  });
});
