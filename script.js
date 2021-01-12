let userMenu = document.querySelector("#navbar4")
let username = sessionStorage.getItem("username")

// membuat username menjadi title case
username = username.replace(/\b\w/g, l => l.toUpperCase())

userMenu.innerText = `${username}`

function showMenuDropdown() {
    let dropdown = document.querySelector(".dropItem")
    dropdown.classList.toggle("show")
}

function userDropdown() {
    let dropdown = document.querySelectorAll(".dropItem")[1]
    dropdown.classList.toggle("show")
}


function showSidebarDropdown() {
    let dropdown = document.getElementById("left-sidebar-ready");
    dropdown.classList.toggle("show")
    console.log(dropdown);
}