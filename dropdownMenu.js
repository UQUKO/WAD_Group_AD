var isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; 

console.log("isLoggedIn:", isLoggedIn);
console.log("userName:", localStorage.getItem("userName"));
console.log("userEmail:", localStorage.getItem("userEmail"));

function toggleDropdown() {
    if (!isLoggedIn) {
        window.location.href = "login.html";
        return;
    }

    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {

        var userName = localStorage.getItem("userName")
        var userEmail = localStorage.getItem("userEmail")

        //document.getElementById("userName").textContent = userName;
        document.getElementById("userEmail").textContent = userEmail;

        dropdown.style.display = "block";
    }
}

//when the user clicks off the menu
window.onclick = function(event) {
    if (!event.target.matches(".login img")) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}

function logout() {
    window.location.href = "login.html";
}
