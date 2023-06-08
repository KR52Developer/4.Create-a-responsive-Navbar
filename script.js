let threeBar = document.querySelector(".threeBar");
let arrowUpBtn = document.querySelector(".arrowUpBtn");
let navList = document.querySelector(".navList");


threeBar.addEventListener("click", function () {
    navList.classList.toggle("hideNavItems");
    navList.classList.toggle("showNavList");
    threeBar.classList.toggle("hidetoggleBtn");
    arrowUpBtn.classList.toggle("arrowUpBtn");
})


arrowUpBtn.addEventListener("click", function () {
    arrowUpBtn.classList.toggle("arrowUpBtn");
    threeBar.classList.toggle("hidetoggleBtn");
    navList.classList.toggle("showNavList");
    navList.classList.toggle("hideNavItems");
})