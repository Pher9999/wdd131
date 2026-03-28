const today = new Date();

document.getElementById("currentyear").innerHTML = `©${today.getFullYear()}`;
document.getElementById("lastmodified").innerHTML = `Last Modified: ${document.lastModified}`;

/* hamburger button */
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");


    if (navMenu.classList.contains("show")) {
        menuButton.innerHTML = "✕";
    } else {
        menuButton.innerHTML = "☰";
    }
});


const temples = [
    {
        templeName: "Salt Lake City Utah",
        location: "Salt Lake City, Utah",
        dedicated: "1974-11-17",
        area: 156558,
        imageUrl: "images/salt_lake_temple_lds.jpeg"
    },
    {
        templeName: "Boston Massachusetts",
        location: "Boston, Massachusetts",
        dedicated: "2000-10-01",
        area: 69600,
        imageUrl: "images/boston_temple_lds.jpeg "
    },
    {
        templeName: "Atlanta Georgia",
        location: "Atlanta, Georgia",
        dedicated: "1983-06-02",
        area: 34500,
        imageUrl:
            "images/atlanta_temple_lds.jpeg"
    },
    {
        templeName: "Baton Rouge Louisiana",
        location: "Baton Rouge, Louisiana",
        dedicated: "2000-07-16",
        area: 10890,
        imageUrl:
            "images/baton_rouge_temple_lds.jpeg"
    },
    {
        templeName: "Nauvoo Illinois",
        location: "Nauvoo, Illinois",
        dedicated: "2002-06-30",
        area: 54000,
        imageUrl:
            "images/nauvoo_temple_lds.jpeg"
    },
    {
        templeName: "Memphis Tennessee",
        location: "Memphis, Tennessee",
        dedicated: "2000-07-16",
        area: 10890,
        imageUrl:
            "images/memphis_temple_lds.jpeg"
    },
    {
        templeName: "Manhattan New York",
        location: "Manhattan, New York",
        dedicated: "2004-06-13",
        area: 20630,
        imageUrl:
            "images/manhattan_temple_lds.jpeg"
    },
    {
        templeName: "Kirtland Ohio",
        location: "Kirtland, Ohio",
        dedicated: "1836-03-27",
        area: 15000,
        imageUrl:
            "images/kirtland_temple.jpeg"
    },
    {
        templeName: "Hartford Connecticut",
        location: "Hartford, Connecticut",
        dedicated: "2016-11-20",
        area: 32246,
        imageUrl:
            "images/hartford_ct_temple.jpeg"
    }];

createTempleCard(temples);

const oldTemplesLink = document.querySelector("#old");
const newTemplesLink = document.querySelector("#new");
const largeTemplesLink = document.querySelector("#large");
const smallTemplesLink = document.querySelector("#small");

const oldTemples = temples.filter(temple => new Date(temple.dedicated) < new Date("1900-01-01"));
const newTemples = temples.filter(temple => new Date(temple.dedicated) >= new Date("2000-01-01"));
const largeTemples = temples.filter(temple => temple.area > 90000);
const smallTemples = temples.filter(temple => temple.area <= 10000);

oldTemplesLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => new Date(temple.dedicated) < new Date("1900-01-01")));
});

newTemplesLink.addEventListener("click", () => {
    document.getElementById("temple-cards").innerHTML = "";
    createTempleCard(newTemples);
});

largeTemplesLink.addEventListener("click", () => {
    document.getElementById("temple-cards").innerHTML = "";
    createTempleCard(largeTemples);
});

smallTemplesLink.addEventListener("click", () => {
    document.getElementById("temple-cards").innerHTML = "";
    createTempleCard(smallTemples);
});

function createTempleCard(filteredTemples) {
    document.getElementById("temple-cards").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        card.className = "temple-cards";
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedicated = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Area:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `Image of ${temple.templeName}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(img);

        document.getElementById("temple-cards").appendChild(card);
    }
    );
};

