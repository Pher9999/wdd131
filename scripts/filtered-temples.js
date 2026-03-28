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

createTempleCard();

function createTempleCard() {
    const templeContainer = document.getElementById("temple-grid");
    temples.forEach(temple => {
        if (temple.area > 20000) {
            const card = document.createElement("div");
            card.classList.add("temple-card");
            card.innerHTML = `              <h2>${temple.templeName}</h2>   
                <p><strong>Location:</strong> ${temple.location}</p>

                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Area:</strong> ${temple.area} sq ft</p>
                <img src="${temple.imageUrl}" alt="${temple.templeName}">`;
            templeContainer.appendChild(card);
        }
    });

    const temples = [
        {
            templeName: "Salt Lake City Utah",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "images/salt_lake_temple_lds.jpeg"
        },
        {
            templeName: "Boston Massachusetts",
            location: "Boston, Massachusetts, United States",
            dedicated: "2000, October, 1",
            area: 69600,
            imageUrl: "images/boston_temple_lds.jpeg "
        },
        {
            templeName: "Atlanta Georgia",
            location: "Atlanta, Georgia, United States",
            dedicated: "1983, June, 2",
            area: 34500,
            imageUrl:
                "images/atlanta_temple_lds.jpeg"
        },
        {
            templeName: "Baton Rouge Louisiana",
            location: "Baton Rouge, Louisiana, United States",
            dedicated: "2000, July, 16",
            area: 10890,
            imageUrl:
                "images/baton_rouge_temple_lds.jpeg"
        },
        {
            templeName: "Nauvoo Illinois",
            location: "Nauvoo, Illinois, United States",
            dedicated: "2002, June, 30",
            area: 54000,
            imageUrl:
                "images/nauvoo_temple_lds.jpeg"
        },
        {
            templeName: "Memphis Tennessee",
            location: "Memphis, Tennessee, United States",
            dedicated: "2000, July, 16",
            area: 10890,
            imageUrl:
                "images/memphis_temple_lds.jpeg"
        },
        {
            templeName: "Manhattan New York",
            location: "Manhattan, New York, United States",
            dedicated: "2004, June, 13",
            area: 20630,
            imageUrl:
                "images/manhattan_temple_lds.jpeg"
        },
        {
            templeName: "Kirtland Ohio",
            location: "Kirtland, Ohio, United States",
            dedicated: "1836, March, 27",
            area: 15000,
            imageUrl:
                "images/kirtland_temple_lds.jpeg"
        },
        {
            templeName: "Hartford Connecticut",
            location: "Hartford, Connecticut, United States",
            dedicated: "2016, November, 20",
            area: 32246,
            imageUrl:
                "images/hartford_temple_lds.jpeg"
        }];