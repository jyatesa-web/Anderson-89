//DOM Selection
//event listeners
//functions
//if/else
//object/arraay
// let myvar = "Martin";
// console.log(`Hello, ${myvar}`)
//DOM Elements/selectors
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menubtn");
const mobileMenu = document.getElementById("mobileMenu");
const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");
const phoneLink = document.getElementById("phoneLink");
const heading = document.getElementById("heroHeading");
const featureGrid = document.getElementById("featureGrid");
const nav = document.getElementById("nav");
const siteHeader = document.querySelector(".site-header");
 
const services = [
    {
        title: "Classic Haircut",
        text: "Timeless cuts with modern precision tailored to your style.",
        img: "assets/images/feature-1.jpg"
    },
    {
        title: "Beard Trim",
        text: "Shape and line-up your beard for a clean, sharp finish.",
        img: "assets/images/feature-2.jpg"
    },
    {
        title: "Straight Razor Shave",
        text: "Hot towl treatment with a smooth traditional shave.",
        img: "assets/images/feature-3.jpg"
    },
    {
        title: "Kids Cut",
        text: "Half Price Kids haircut",
        img: "assets/images/feature-3.jpg"
    },
 
];
//Navigation Data(array of objects)
const navLinks = [
    {label: "Home", href: "#hero"},
    {label: "Services", href:"#features"},
    {label: "Book", href:"#cta"},
    {label: "Contact", href: "#footer"}
];
 
//Render Navigation using .map()
const renderNavigation = () => {
 
    //destop Nav
    if(nav){
        const navHTML = navLinks.map((link) => {
            return `
                <a href="${link.href}" class="nav-link">
                    ${link.label}
                </a>
            `;
        }).join("");
        nav.innerHTML = navHTML;
    }
 
    //Mobile Nav
    if(mobileMenu){
        const mobileHTML = navLinks.map(link => {
            return `
                <a href="${link.href}" class="mobile-link">
                    ${link.label}
                </a>
 
            `;
        }).join("");
        mobileMenu.innerHTML = mobileHTML;
    }
 
 
};
renderNavigation();
 
 
 
const handleHeaderOnScroll = () => {
    if(!siteHeader)return;
 
    if(window.scrollY > 10){
        siteHeader.classList.add("is-scrolled");
    }else{
        siteHeader.classList.remove("is-scrolled");
    };
 
};
 
 
// Render Featurs using forEach
 
const renderFeatures = () => {
    const cardsHTML = services.map((service) =>{
        return `
        <article class="feature-card">
            <img src="${service.img}" alt="${service.title}" class="feature-img"/>
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-text">${service.text}</p>
        </article>
   
    `
   
}).join("");
featureGrid.innerHTML = cardsHTML;
};
renderFeatures()
 
 
 
 
 
 
 
 
//update footer year automatically
const setCurrentYear = () => {
    const now = new Date();
    // console.log(yearEl);
    yearEl.textContent = now.getFullYear();
};
 
//Toggle mobile menu open/close
 
let isMenuOpen = false;
 
const toggleMobileMenu = () =>{
    //make sure mobile menu is there
    if(!mobileMenu){
        return;
    };
 
    //create a if statement for menuOpen
    if(isMenuOpen === false){
        mobileMenu.classList.add("is-open");
        isMenuOpen = true
    }else{
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;
    }
 
};
 
//close mobile menu(used when a link is clicked)
 
const closeMobileMenu = () => {
    if(!mobileMenu){return};
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};
 
//resuable function with parameters
const updateHeadText = (newText) => {
    if(!heading)return;
    heading.textContent = newText
};
 
setCurrentYear();
 
//Event Listeners
//Hamburger menu toggle
if(menuBtn){
    menuBtn.addEventListener("click", () => {
        toggleMobileMenu();
    });
};
 
// close mobile menu when a mobile link is click
 
if(mobileMenu){
    mobileMenu.addEventListener("click",(event) => {
        //if they click in <a> inside the menu, close it
        if(event.target.tagName === "A"){
            closeMobileMenu()
        };
    });
};
 
 
//CTA button: "Book Now"
 
if(ctaBtn){
    ctaBtn.addEventListener("click", ()=>{
        updateHeadText("Booking coming next --- great choice!");
    });
};
 
 
 
//Call Button: try to use the phone number in the footer
 
if(callBtn){
    callBtn.addEventListener("click", () => {
        if(phoneLink){
            updateHeadText("Call us at" + phoneLink.textContent);
        }else{
            updateHeadText("Call feature coming next!");
        };
    });
};
 
//Footer year auto-fills
//Hamburger Menu opens/closes (works with your mobile-menu.is-open CSS)
//CTA buttons do something visible(updates hero heading)
 
window.addEventListener("scroll", handleHeaderOnScroll);
 