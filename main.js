const themelight = document.getElementById("theme-light");
const themeblack = document.getElementById("theme-black");
const themesystn = document.getElementById("theme-system");
const body = document.querySelector("html");

window.onscroll = function() {scroolbar()};
function scroolbar() {
  if (document.documentElement.scrollTop >= 1) {
    document.querySelector('.header-container').classList.add('header-scrool');
  }
  else {
    document.querySelector('.header-container').classList.remove('header-scrool');
  }
}

themelight.addEventListener("click", (e) => {
  if(body.attributes["data-theme"].value == "light") {
    //
  }
  else {
    body.attributes["data-theme"].value = "light";
    setStorage();
  }
})

themeblack.addEventListener("click", (e) => {
  if(body.attributes["data-theme"].value == "black") {
    //
  }
  else {
    body.attributes["data-theme"].value = "black";
    setStorage();
  }
})

themesystn.addEventListener("click", (e) => {
  if(body.attributes["data-theme"].value == "system") {
    //
  }
  else {
    body.attributes["data-theme"].value = "system";
    setStorage();
  }
})

const setStorage = () => {
  console.log("Veri güncellendi");
  window.localStorage.setItem("theme-data", JSON.stringify(body.attributes["data-theme"].value))
}

const getStore = () => {
  const d = JSON.parse(window.localStorage.getItem("theme-data"))
  console.log("Log " + d)
  body.attributes["data-theme"].value = d === null ? [] : d
}

window.addEventListener('load', () => {
  getStore();
}, false)