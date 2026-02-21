function togglePassword() {
    const pass = document.getElementById("password");
    pass.type = pass.type === "password" ? "text" : "password";
}

function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("message");
    const loader = document.getElementById("loader");
    const btnText = document.getElementById("btnText");

    message.textContent = "";

    if (username === "" || password === "") {
        message.style.color = "red";
        message.textContent = "Please fill all fields";
        return;
    }

    // Show loader
    loader.style.display = "inline-block";
    btnText.textContent = "Loading";

    setTimeout(() => {
        loader.style.display = "none";
        btnText.textContent = "Login";

        if (username === "admin" && password === "1234") {
            message.style.color = "green";
            message.textContent = "Login successful!";
        } else {
            message.style.color = "red";
            message.textContent = "Invalid username or password";
        }
    }, 1500);
}