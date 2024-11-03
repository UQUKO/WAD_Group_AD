document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    var email = document.getElementById("email").value;
    //var name = document.getElementById("name").value;

    sessionStorage.setItem("userEmail", email);
    sessionStorage.setItem("userName", email.split("@")[0]);
    sessionStorage.setItem("isLoggedIn", "true");

    window.location.href = "index.html";
});