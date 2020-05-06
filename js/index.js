const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Nav
let navLink = document.querySelectorAll("a");
let newNavLinks = Array.from(navLink);

navLink[0].textContent = siteContent["nav"]["nav-item-1"];
navLink[1].textContent = siteContent["nav"]["nav-item-2"];
navLink[2].textContent = siteContent["nav"]["nav-item-3"];
navLink[3].textContent = siteContent["nav"]["nav-item-4"];
navLink[4].textContent = siteContent["nav"]["nav-item-5"];
navLink[5].textContent = siteContent["nav"]["nav-item-6"];

//Add navlink prepend and appendChild
const firstLink = document.createElement("a");
const firstLinkText = document.createTextNode("First");

const lastLink = document.createElement("a");
const lastLinkText = document.createTextNode("Last");
const parentElement = document.querySelector("nav");

firstLink.appendChild(firstLinkText);
lastLink.appendChild(lastLinkText);

parentElement.prepend(firstLink);
parentElement.appendChild(lastLink);

//Nav Styles
// header.style.width = "100vw";

newNavLinks.forEach((link) => {
  link.style.color = "green";
  link.style.backgroundColor = "lightBlue";
  link.style.borderRadius = "16px";
  link.style.padding = "6px 12px 8px";
});

firstLink.style.color = "green";
firstLink.style.backgroundColor = "lightBlue";
firstLink.style.borderRadius = "16px";
firstLink.style.padding = "6px 12px 8px";

lastLink.style.color = "green";
lastLink.style.backgroundColor = "lightBlue";
lastLink.style.borderRadius = "16px";
lastLink.style.padding = "6px 12px 8px";

// CTA
let headline = document.querySelector("h1");
headline.innerHTML = `DOM <br>Is <br>Awesome`;

let ctaButton = document.querySelector("button");
ctaButton.textContent = siteContent["cta"]["button"];

let callToActionImg = document.getElementById("cta-img");
callToActionImg.setAttribute("src", siteContent["cta"]["img-src"]);

// Middle h4
let textContenth4 = document.querySelectorAll(".text-content h4");
textContenth4[0].textContent = siteContent["main-content"]["features-h4"];
textContenth4[1].textContent = siteContent["main-content"]["about-h4"];
textContenth4[2].textContent = siteContent["main-content"]["services-h4"];
textContenth4[3].textContent = siteContent["main-content"]["product-h4"];
textContenth4[4].textContent = siteContent["main-content"]["vision-h4"];

// Middle p
let textContentPara = document.querySelectorAll(".text-content p");
textContentPara[0].textContent =
  siteContent["main-content"]["features-content"];
textContentPara[1].textContent = siteContent["main-content"]["about-content"];
textContentPara[2].textContent =
  siteContent["main-content"]["services-content"];
textContentPara[3].textContent = siteContent["main-content"]["product-content"];
textContentPara[4].textContent = siteContent["main-content"]["vision-content"];

//Middle Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//Contact
let contactInfoh4 = document.querySelector(".contact h4");
contactInfoh4.textContent = siteContent["contact"]["contact-h4"];

let contactInfoPara = document.querySelectorAll(".contact p");
contactInfoPara[0].textContent = siteContent["contact"]["address"];
contactInfoPara[1].textContent = siteContent["contact"]["phone"];
contactInfoPara[2].textContent = siteContent["contact"]["email"];

contactInfoPara[0].style.width = "200px";

//Footer
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
