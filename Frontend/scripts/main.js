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
async function populateTable() {
  try {
    const response = await fetch("http://localhost:3000/fetchData");
    const data = await response.json();
    const table = document
      .getElementById("completedTable")
      .getElementsByTagName("tbody")[0];

    data.forEach((element) => {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);
      const cell5 = row.insertCell(4);
      const cell6 = row.insertCell(5);
      cell1.textContent = element.id;
      cell2.textContent = element.department;
      cell3.textContent = element.description;
      cell4.textContent = element.queryType;
      cell5.textContent = element.contactNo;
      cell6.textContent = element.priority;
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

window.onload = populateTable;
