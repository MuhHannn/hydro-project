const navBar = document.querySelector(".navbar");

window.addEventListener ("scroll", () => {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", positionWindow);
    sideBar.classList.remove("menu-active");
});
