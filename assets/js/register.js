document.getElementById("registerForm").addEventListener("submit", function(event) {

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMsg = document.getElementById("errorMsg");

    if (password !== confirmPassword) {
        event.preventDefault();
        errorMsg.textContent = "Passwords do not match!";
    } else {
        errorMsg.textContent = "";
    }

});