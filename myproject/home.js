
document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Reservation Submitted!");
  });

  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    alert('Login functionality coming soon!');
  });

  
  document.getElementById('logoutButton').addEventListener('click', function() {
    // Display a logout confirmation message
    alert('You have been logged out. Thank you!');
    // Redirect to login page after the message
    window.location.href = 'login.html';
  });
