function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("overlay").classList.toggle("show");
}

function toggleCountry() {
    document.getElementById("countryDropdown").classList.toggle("show");
}

function selectCountry(country) {
    document.querySelector(".country-btn").innerHTML =
        "🌍 " + country + ' <i class="fas fa-chevron-down"></i>';

    document.getElementById("countryDropdown").classList.remove("show");
}

const searchBtn = document.getElementById("searchBtn");
const cartBtn = document.getElementById("cartBtn");

const searchOverlay = document.getElementById("searchOverlay");
const cartPanel = document.getElementById("cartPanel");

const closeSearch = document.getElementById("closeSearch");
const closeCart = document.getElementById("closeCart");

/* SEARCH */
searchBtn.onclick = () => {
    searchOverlay.classList.add("active");
};

closeSearch.onclick = () => {
    searchOverlay.classList.remove("active");
};

/* CART */
cartBtn.onclick = () => {
    cartPanel.classList.add("active");
};

closeCart.onclick = () => {
    cartPanel.classList.remove("active");
};
function changeImage(src){
  document.getElementById("mainImage").src = src;
}
function scrollGallery(direction){
  const gallery = document.getElementById("gallery");
  const width = gallery.clientWidth;
  gallery.scrollBy({
    left: direction * width,
    behavior: "smooth"
  });
}
const loginBtn = document.getElementById("loginBtn");
const loginOverlay = document.getElementById("loginOverlay");
const closeOverlay = document.getElementById("closeOverlay");

// Ouvrir l'overlay
loginBtn.addEventListener("click", () => {
    loginOverlay.style.display = "flex";
    setTimeout(() => loginOverlay.classList.add("show"), 10); // effet animation
});

// Fermer l'overlay
closeOverlay.addEventListener("click", () => {
    loginOverlay.classList.remove("show");
    setTimeout(() => loginOverlay.style.display = "none", 400);
});

// Fermer si clic en dehors du modal
window.addEventListener("click", (e) => {
    if (e.target === loginOverlay) {
        loginOverlay.classList.remove("show");
        setTimeout(() => loginOverlay.style.display = "none", 400);
    }
});

const countries = [
    {name:"Maroc", currency:"MAD", flag:"🇲🇦"},
    {name:"France", currency:"EUR", flag:"🇫🇷"},
    {name:"USA", currency:"USD", flag:"🇺🇸"},
    {name:"Espagne", currency:"EUR", flag:"🇪🇸"},
    {name:"Allemagne", currency:"EUR", flag:"🇩🇪"},
    {name:"Italie", currency:"EUR", flag:"🇮🇹"},
    {name:"Canada", currency:"CAD", flag:"🇨🇦"},
    {name:"Japon", currency:"JPY", flag:"🇯🇵"},
    {name:"Chine", currency:"CNY", flag:"🇨🇳"},
];

const btn = document.getElementById("countryBtn");
const dropdown = document.getElementById("countryDropdown");
const list = document.getElementById("countryList");
const search = document.getElementById("countrySearch");
const selected = document.getElementById("selectedCountry");
const container = document.querySelector(".country-select");

btn.onclick = () => {
    dropdown.classList.toggle("show");
}

function renderCountries(filter=""){
    list.innerHTML="";
    countries
      .filter(c=>c.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(c=>{
        const div = document.createElement("div");
        div.className="country-item";
        div.innerHTML = `${c.flag} ${c.name} <span>${c.currency}</span>`;
        div.onclick = ()=>{
            selected.innerHTML = `${c.flag} ${c.name} <small>${c.currency}</small>`;
            dropdown.classList.remove("show");
        }
        list.appendChild(div);
    });
}

search.oninput = e => renderCountries(e.target.value);
renderCountries();

document.addEventListener("click",e=>{
    if(!container.contains(e.target)){
        dropdown.classList.remove("show");
    }
});

document.getElementById("contactForm").addEventListener("submit", e=>{
    e.preventDefault();
    alert("Your message has been sent successfully!");
});