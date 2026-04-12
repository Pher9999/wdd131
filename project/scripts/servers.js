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


const servers = [
    {
        name: "K2S0 - Router/firewall",
        location: "Home Network",
        type: "Security",
        description: "Supermicro server running Proxmox VE. Running Opensense in a VM for firewall and router duties.",
        imageUrl: "images/k2s0.jpg"
    },
    {
        name: "MCP - Main file server",
        location: "Home Network",
        type: "Storage",
        description: "Supermicro server running TrueNas. 2 Chassis total of 60 drives. Total storage capacity: 204TB.",
        imageUrl: "images/mcp1.jpg"
    },
    {
        name: "MCP - Main file server",
        location: "Home Network",
        type: "Storage",
        description: "Supermicro server running TrueNas. 2 Chassis total of 60 drives. Total storage capacity: 204TB.",
        imageUrl: "images/mcp2.jpg"
    },
    {
        name: "Xana - Media Server",
        location: "Home Network",
        type: "Media",
        description: "Supermicro server running Emby for media server functionality.",
        imageUrl: "images/xana.jpg"
    },
    {
        name: "Joshua - Development Server",
        location: "Home Network",
        type: "Development",
        description: "Supermicro server running Proxmox VE. Running various VMs for development and testing purposes.",
        imageUrl: "images/joshua_c3p0.jpg"
    },
    {
        name: "C3P0 - Development Server",
        location: "Home Network",
        type: "Development",
        description: "Supermicro server running Proxmox VE. Running various VMs for development and testing purposes.",
        imageUrl: "images/joshua_c3p0.jpg"
    }
];

createServerCard(servers);

const securityServersLink = document.querySelector("#security");
const storageServersLink = document.querySelector("#storage");
const developmentServersLink = document.querySelector("#development");
const mediaServersLink = document.querySelector("#media");

const securityServers = servers.filter((server) => server.type === "Security");
const storageServers = servers.filter((server) => server.type === "Storage");
const developmentServers = servers.filter((server) => server.type === "Development");
const mediaServers = servers.filter((server) => server.type === "Media");


securityServersLink.addEventListener("click", () => {
    document.getElementById("server-cards").innerHTML = "";
    createServerCard(securityServers);
});

storageServersLink.addEventListener("click", () => {
    document.getElementById("server-cards").innerHTML = "";
    createServerCard(storageServers);
});

developmentServersLink.addEventListener("click", () => {
    document.getElementById("server-cards").innerHTML = "";
    createServerCard(developmentServers);
});

mediaServersLink.addEventListener("click", () => {
    document.getElementById("server-cards").innerHTML = "";
    createServerCard(mediaServers);
});


function createServerCard(filteredServers) {
    document.getElementById("server-cards").innerHTML = "";
    filteredServers.forEach(server => {
        let card = document.createElement("section");
        card.className = "server-cards";
        let name = document.createElement("h2");
        let location = document.createElement("p");
        let description = document.createElement("p");
        let type = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = server.name;
        location.innerHTML = `<span class="label">Location:</span> ${server.location}`;
        type.innerHTML = `<span class="label">Type:</span> ${server.type}`;
        description.innerHTML = `<span class="label">Description:</span> ${server.description}`;
        img.setAttribute("src", server.imageUrl);
        img.setAttribute("alt", `Image of ${server.name}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(description);
        card.appendChild(img);

        document.getElementById("server-cards").appendChild(card);
    }
    );
};

