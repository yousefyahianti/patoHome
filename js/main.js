document.addEventListener("DOMContentLoaded", () => {
    window.onscroll = () => {
        if (window.scrollY > 50) {
            document.querySelector("#mainNavBar").classList.add("navbarDown");
            document.querySelector("#logoImg").setAttribute("src", "images/icons/logo2.png");
        } else {
            document.querySelector("#mainNavBar").classList.remove("navbarDown");
            document.querySelector("#logoImg").setAttribute("src", "images/icons/logo.png");
        }

        if (window.scrollY > 100) {
            document.querySelector("#upArrow").style.display = "block";
        } else {
            document.querySelector("#upArrow").style.display = "none";
        }
    };

    document.querySelector("#upArrow").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
