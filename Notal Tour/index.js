// Hamburger Icon Transition
function show() {
    var shows = document.getElementById("appear")
    shows.innerHTML = "<button>Hello, Johnny</button>";
    var img = document.createElement("img");
    img.src = "./Images/Ellipse 887.png";
    var src = document.getElementById("profile");
    src.appendChild(img);
    if ((shows.style.display === "block") || (src.style.display === "block")){
        shows.style.display = "none";
        src.style.display = "none";
    }
    else {
        shows.style.display = "block";
        src.style.display = "block";
        document.getElementById("sign").style.display = "none";
    }
}

// function show() {
//     var shows = document.getElementById("appear")
//     shows.innerHTML = "<button>Hello, Johnny</button>";
//     if (shows.style.display === "block"){
//         shows.style.display = "none";
//     }
//     else {
//         shows.style.display = "block";
//         document.getElementById("sign").style.display = "none";
//     }
// }

function hamburger(x) {
    x.classList.toggle("change");
    var ham = document.getElementById("menu3");
    if (ham.style.display === "block") {
      ham.style.display = "none";
    } 
    else {
      ham.style.display = "block";
    }
}

function hamburger1() {
    var ham1 = document.getElementById("dropbtn");
    if (ham1.style.display === "block") {
      ham1.style.display = "none";
      document.getElementById("menu3").style.width = "150px";
      document.getElementById("menu3").style.left = "0px";
    } 
    else {
      ham1.style.display = "block";
      document.getElementById("menu3").style.width = "315px";
      document.getElementById("menu3").style.left = "-167px";
    }
}

function hamburger2() {
    var ham2 = document.getElementById("dropbtn1");
    if (ham2.style.display === "block") {
      ham2.style.display = "none";
    } 
    else {
      ham2.style.display = "block";
    }
}

