document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    //var name = document.getElementById("name").value;

    localStorage.setItem("userEmail", email);
    //localStorage.setItem("userName", name);
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "index.html";
});