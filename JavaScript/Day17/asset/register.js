let registerPage = document.getElementById("registerPage");
let loginPage = document.getElementById("loginPage");
let dashboardPage = document.getElementById("dashboardPage");

let registerForm = document.getElementById("registerForm");
let loginForm = document.getElementById("loginForm");

let showLogin = document.getElementById("showLogin");
let showRegister = document.getElementById("showRegister");

let users = JSON.parse(localStorage.getItem("users")) || [];

showLogin.addEventListener("click", () => {
    registerPage.style.display = "none";
    loginPage.style.display = "block";
});

showRegister.addEventListener("click", () => {
    loginPage.style.display = "none";
    registerPage.style.display = "block";
});

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let name = document.getElementById("regName").value.trim();
    let email = document.getElementById("regEmail").value.trim();
    let password = document.getElementById("regPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let existingUser = users.find((user) => user.email === email);

    if (existingUser) {
        alert("Email already registered");
        return;
    }

    let user = {
        name: name,
        email: email,
        password: password
    };

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration successful!");

    registerForm.reset();

    registerPage.style.display = "none";
    loginPage.style.display = "block";
});

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value.trim();
    let password = document.getElementById("loginPassword").value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
        return;
    }

    let user = users.find((user) =>
        user.email === email && user.password === password
    );

    if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));

        loginPage.style.display = "none";
        registerPage.style.display = "none";
        dashboardPage.style.display = "block";

        document.getElementById("welcome").innerText =
            `Welcome, ${user.name}!`;
    } else {
        alert("Invalid email or password");
    }
});

document.getElementById("logout").addEventListener("click", () => {
    localStorage.removeItem("currentUser");

    dashboardPage.style.display = "none";
    loginPage.style.display = "block";
});