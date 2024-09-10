const nav = document.getElementById("navIcon");
const main = document.getElementById("main");
const aside = document.getElementsByTagName("aside")[0];
let navHide = 1,
    SearchBarHide = 1;

setTimeout(() => {
    let MessagesAria = main.querySelector("main");
    for (let i = 0; i < MessagesAria.children.length; i++) {
        MessagesAria.children[i].style.transform = "translateY(0px)";
        MessagesAria.children[i].style.opacity = "1";
    }
}, 1);

function navBar() {
    if (navHide) {
        main.style.transform = "translateX(150px)";
        aside.style.transform = "translateX(-250px)";
        navHide--;
    } else {
        main.style.transform = "translateX(0px)";
        aside.style.transform = "translateX(0px)";
        navHide++;
    }
}

function SearchBar() {
    let input = document.querySelector("input");
    if (SearchBarHide) {
        input.style.transform = "translateX(0px)";
        input.style.opacity = 1;
        input.style.scale = 1;
        SearchBarHide--;
    } else {
        input.style.transform = "translateX(40px)";
        input.style.opacity = 0;
        setTimeout(() => {
            input.style.scale = 0;
        }, 1000);
        SearchBarHide++;
    }
}
