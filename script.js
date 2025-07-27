const API_URL = "http://localhost:5000/api"; 


async function register() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;

    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    alert(data.message);
}

async function login() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to dashboard or another page
    } else {
        alert(data.message || "Login failed!");
    }
}


// Function to show the appropriate form based on the button clicked
function showForm(formType) {
    const registerSection = document.getElementById("register-section");
    const loginSection = document.getElementById("login-section");

    if (formType === "register") {
        registerSection.style.display = "block";
        loginSection.style.display = "none";
    } else {
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    }
}


function logout() {
  alert("Logging out...");
  window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("logout-btn")?.addEventListener("click", logout);
});
