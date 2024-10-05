const exoplanets = [
  {
    name: "Proxima Centauri b",
    type: "Rocky",
    image: "https://shorturl.at/6UrZy",
    description: "The closest known exoplanet to the Sun.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/Proxima_Cen_b"
  },
  {
    name: "Kepler-452b",
    type: "Rocky",
    image: "https://shorturl.at/NQIBl",
    description: "Dubbed 'Earth's cousin,' it orbits in the habitable zone.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/Kepler-452_b"
  },
  {
    name: "WASP-12b",
    type: "Gas Giant",
    image: "https://shorturl.at/wUUDF",
    description: "An ultra-hot Jupiter with a close orbit to its star.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/WASP-12_b"
  },
  {
    name: "Trappist-1e",
    type: "Rocky",
    image: "https://shorturl.at/Dt4J0",
    description: "One of the seven planets in the Trappist-1 system.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/TRAPPIST-1_e"
  },
  {
    name: "HD 209458 b",
    type: "Gas Giant",
    image: "https://shorturl.at/FGXlN",
    description: "Notable for its atmospheric studies revealing the presence of water vapor.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/HD_209458_b"
  },
  {
    name: "55 Cancri e",
    type: "Rocky",
    image: "https://shorturl.at/w9le4",
    description: "A super-Earth known for its high temperatures and potential for a carbon-rich atmosphere.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/55_Cnc_e"
  },
  {
    name: "HD 21520 b",
    type: "Gas Giant",
    image: "https://shorturl.at/fzOQp",
    description: "A massive exoplanet located approximately 75 light-years away, notable for its unique characteristics.",
    url: "https://eyes.nasa.gov/apps/exo/#/planet/HD_21520_b"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");

  // Render initial cards
  renderCards(exoplanets);

  // Add "View More" card
  const viewMoreCard = document.createElement("div");
  viewMoreCard.classList.add("card");
  viewMoreCard.innerHTML = `
    <div class="card-image">
      <img src="https://shorturl.at/DIETZ" alt="View More Exoplanets">
    </div>
    <div class="card-content">
      <h2>View More</h2>
      <p>Explore additional exoplanets and their unique features!</p>
      <button>Learn More</button>
    </div>
  `;
  viewMoreCard.onclick = () => window.open('https://eyes.nasa.gov/apps/exo/#/', '_blank'); // Open in new tab
  cardContainer.appendChild(viewMoreCard);

  // Search and filter functionality
  document.getElementById("search-input").addEventListener("input", filterCards);
  document.getElementById("type-filter").addEventListener("change", filterCards);
});

function renderCards(exoplanets) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear previous cards

  exoplanets.forEach(exoplanet => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.onclick = () => window.open(exoplanet.url, '_blank'); // Open in new tab

    card.innerHTML = `
      <div class="card-image">
        <img src="${exoplanet.image}" alt="${exoplanet.name}">
      </div>
      <div class="card-content">
        <h2>${exoplanet.name}</h2>
        <p>Type: ${exoplanet.type}</p>
        <p>${exoplanet.description}</p>
        <button aria-label="Learn more about ${exoplanet.name}">Learn More</button>
      </div>
    `;
    
    cardContainer.appendChild(card);
  });
}

function filterCards() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const typeFilter = document.getElementById("type-filter").value;

  const filteredExoplanets = exoplanets.filter(exoplanet => {
    const matchesSearch = exoplanet.name.toLowerCase().includes(searchInput) || exoplanet.description.toLowerCase().includes(searchInput);
    const matchesType = typeFilter === "all" || exoplanet.type === typeFilter;
    return matchesSearch && matchesType;
  });

  renderCards(filteredExoplanets);
}