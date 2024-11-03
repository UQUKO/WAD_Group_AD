var isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true"; 

console.log("isLoggedIn:", isLoggedIn);
console.log("userName:", sessionStorage.getItem("userName"));
console.log("userEmail:", sessionStorage.getItem("userEmail"));

function toggleDropdown() {
    if (!isLoggedIn) {
        window.location.href = "login.html";
        return;
    }

    var dropdown = document.getElementById("dropdownMenu");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {

        var userName = sessionStorage.getItem("userName")
        var userEmail = sessionStorage.getItem("userEmail")

        document.getElementById("userName").textContent = userName;
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
    sessionStorage.setItem("isLoggedIn", "false");
    window.location.href = "login.html";
}
