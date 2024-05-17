// Retrieve user information from local storage
var username = localStorage.getItem("username");
var email = localStorage.getItem("email");
var userType = localStorage.getItem("userType");

// Display user information in the personal info section
document.getElementById("userName").textContent = username;
document.getElementById("userEmail").textContent = email;
document.getElementById("userType").textContent = userType;

// Add event listener to the logout button
document.getElementById("logoutButton").addEventListener("click", function () {
  // Clear user information from local storage
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("userType");
  // Redirect to the login page
  window.location.href = "login.html";
});
