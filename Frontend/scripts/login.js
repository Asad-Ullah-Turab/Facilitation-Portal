document
  .getElementById("toggle-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var loginForm = document.getElementById("login-form");
    var signupForm = document.getElementById("signup-form");
    var formTitle = document.getElementById("form-title");

    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
      formTitle.innerText = "Login";
      event.target.innerText = "Don't have an account? Sign Up";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
      formTitle.innerText = "Sign Up";
      event.target.innerText = "Already have an account? Login";
    }
  });

// Add event listener to the login form
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var username = document.getElementById("username").value;
    // Log the username to the console
    console.log("Username:", username);
    // Redirect to main.html
    window.location.href = "main.html";
  });

// Add event listener to the signup form
document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var newUsername = document.getElementById("new_username").value;
    var email = document.getElementById("email").value;
    var userType = document.getElementById("user_type").value;
    // Log the new user information to the console
    console.log("New Username:", newUsername);
    console.log("Email:", email);
    console.log("User Type:", userType);
    // Store the new user information in local storage
    localStorage.setItem("username", newUsername);
    localStorage.setItem("email", email);
    localStorage.setItem("userType", userType);
    // Redirect to login.html after signup
    window.location.href = "login.html";
  });
