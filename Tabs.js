Tokyo = document.getElementById("tokyo");
London = document.getElementById("london");
Paris = document.getElementById("paris");

TokyoBtn = document.querySelector(".tokyo");
LondonBtn = document.querySelector(".london");
ParisBtn = document.querySelector(".paris");

TokyoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    Tokyo.classList.toggle("tokyo-show");
    LondonBtn.classList.remove("active");
    ParisBtn.classList.remove("active");
    TokyoBtn.classList.toggle("active");
    Paris.classList.remove("paris-show");
    London.classList.remove("london-show");
});

LondonBtn.addEventListener("click", (e) => {
    e.preventDefault();
    London.classList.toggle("london-show");
    TokyoBtn.classList.remove("active");
    ParisBtn.classList.remove("active");
    LondonBtn.classList.toggle("active");
    Tokyo.classList.remove("tokyo-show");
    Paris.classList.remove("paris-show");
});

ParisBtn.addEventListener("click", function (e) {
    e.preventDefault();
    Paris.classList.toggle("paris-show");
    ParisBtn.classList.toggle("active");
    TokyoBtn.classList.remove("active");
    LondonBtn.classList.remove("active");
    Tokyo.classList.remove("tokyo-show");
    London.classList.remove("london-show");

});

