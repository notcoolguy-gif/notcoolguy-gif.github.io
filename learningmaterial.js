const learningMaterials = [
  {
    name: "Pi in the Sky 7",
    type: "Problem Set",
    image: "https://shorturl.at/d9R6e",
    description: "In this illustrated problem set, students use pi to compare the sizes of Mars landing areas, calculate the length of a year for a distant solar system object, measure the depth of the ocean from an airplane, and determine the diameter of a debris disk.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/pi-in-the-sky-7/",
    subject: "Mathematics",
    age: "Grades 7 - 12"
  },
  {
    name: "Telescope Tango: A 'Pi in the Sky' Math Challenge",
    type: "Problem Set",
    image: "https://shorturl.at/0kUv4",
    description: "In this illustrated math problem, students use the mathematical constant pi to calculate how far the TESS spacecraft travels as it sends data to Earth.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/telescope-tango-a-pi-in-the-sky-math-challenge/",
    subject: "Mathematics",
    age: "Grades 6 - 12"
  },
  {
    name: "Pi in the Sky 9",
    type: "Problem Set",
    image: "https://shorturl.at/POiXf",
    description: "In this illustrated problem set, students use pi to detect frost in lunar craters, determine the density of Mars' liquid core, calculate the powered output from a dam, and find out how far a spacecraft travels as it returns data to Earth.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/pi-in-the-sky-9/",
    subject: "Mathematics",
    age: "Grades 6 - 12"
  },
  {
    name: "Presenting With NASA’s Eyes",
    type: "Classroom Activity",
    image: "https://shorturl.at/SUY99",
    description: "Students create a presentation for their peers by exploring planets, missions, and asteroids with NASA’s Eyes, a free, web-based interactive.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/presenting-with-nasas-eyes/",
    subject: "Technology",
    age: "Grades 4 - 12"
  },
  {
    name: "Using Light to Study Planets",
    type: "Classroom Activity",
    image: "https://shorturl.at/cKKtN",
    description: "Students build a spectrometer using basic materials as a model for how NASA uses spectroscopy to determine the nature of elements found on Earth and other planets.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/using-light-to-study-planets/",
    subject: "Science",
    age: "Grades 6 - 11"
  },
  {
    name: "Planetary Poetry",
    type: "Classroom Activity",
    image: "https://shorturl.at/695K9",
    description: "In this cross-curricular STEM and language arts lesson, students learn about planets, stars, and space missions and write STEM-inspired poetry to share their knowledge of or inspiration about these topics.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/planetary-poetry/",
    subject: "Science",
    age: "Grades 2 - 12"
  },
  {
    name: "Habitable Hunt: A 'Pi in the Sky' Math Challenge",
    type: "Problem Set",
    image: "https://shorturl.at/WevOq",
    description: "In this illustrated math problem, students use the mathematical constant pi to find the 'habitable zone' around a distant star and determine which of its planets are in that zone.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/habitable-hunt-a-pi-in-the-sky-math-challenge/",
    subject: "Mathematics",
    age: "Grades 11 - 12"
  },
  {
    name: "Looking for Life",
    type: "Classroom Activity",
    image: "https://shorturl.at/TLS1U",
    description: "Using the fundamental criteria for life, students examine simulated extraterrestrial soil samples for signs of life.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/looking-for-life/",
    subject: "Science",
    age: "Grades 4 - 8"
  },
  {
    name: "Exploring Exoplanets with Kepler",
    type: "Classroom Activity",
    image: "https://shorturl.at/fRogw",
    description: "Students use math concepts related to transits to discover real-world data about Mercury, Venus, and planets outside our solar system.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/exploring-exoplanets-with-kepler/",
    subject: "Mathematics",
    age: "Grades 6 - 12"
  },
  {
    name: "Planet Pinpointer: A 'Pi in the Sky' Math Challenge",
    type: "Problem Set",
    image: "https://shorturl.at/0BzpT",
    description: "In this illustrated math problem, students use pi to calculate the distance across a disk of debris around the star Beta Pictoris.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/planet-pinpointer-a-pi-in-the-sky-math-challenge/",
    subject: "Mathematics",
    age: "Grades 10 - 12"
  },
  {
    name: "Pi in the Sky 4",
    type: "Classroom Activity",
    image: "https://shorturl.at/yapCe",
    description: "In this illustrated problem set, students use the mathematical constant pi to solve real-world science and engineering problems related to craters on Mars, a total solar eclipse, a daring orbit about Saturn, and the search for habitable worlds.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/pi-in-the-sky-4/",
    subject: "Mathematics",
    age: "Grades 6 - 12"
  },
  {
    name: "STEM Activities for Families",
    type: "Family Activity",
    image: "https://shorturl.at/mIaql",
    description: "Launch rockets, build a hovercraft, create a winning science fair project, and more! These science, technology, engineering, and math activities are fun for kids, adults, and the whole family.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/stem-activities-for-families/",
    subject: "Engineering",
    age: "Grades K - 12"
  },
  {
    name: "Pi in the Sky 5",
    type: "Problem Set",
    image: "https://shorturl.at/QOKZU",
    description: "In this illustrated problem set, students use pi to reveal the size of a planet outside our solar system, find out how much helium is raining out from Jupiter's cloud tops, locate a seismic event on Mars, and study an interstellar object detected in our solar system.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/pi-in-the-sky-5/",
    subject: "Mathematics",
    age: "Grades 6 - 12"
  },
  {
    name: "Solar Sleuth: A 'Pi in the Sky' Math Challenge",
    type: "Problem Set",
    image: "https://shorturl.at/iFcof",
    description: "In this illustrated math problem, students use pi and data from the Kepler space telescope to find the size of a planet outside our solar system.",
    url: "https://www.jpl.nasa.gov/edu/teach/activity/solar-sleuth-a-pi-in-the-sky-math-challenge/",
    subject: "Mathematics",
    age: "Grades 6 - 9"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const cardContainer = document.getElementById("card-container");

  // Render initial cards
  renderCards(learningMaterials);

  // Search and filter functionality
  document.getElementById("search-input").addEventListener("input", filterCards);
  document.getElementById("type-filter").addEventListener("change", filterCards);
  document.getElementById("subject-filter").addEventListener("change", filterCards);
  document.getElementById("age-filter").addEventListener("change", filterCards);
});

function renderCards(materials) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = ""; // Clear previous cards

  materials.forEach(material => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.onclick = () => window.open(material.url, "_blank");

    card.innerHTML = `
      <div class="card-image">
        <img src="${material.image}" alt="${material.name}">
      </div>
      <div class="card-content">
        <h2>${material.name}</h2>
        <p>Type: ${material.type}</p>
        <p>${material.description}</p>
        <p>Subject: ${material.subject}</p>
        <p>Age: ${material.age}</p>
        <button aria-label="Learn more about ${material.name}">Learn More</button>
      </div>
    `;
    
    cardContainer.appendChild(card);
  });
}

function filterCards() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const typeFilter = document.getElementById("type-filter").value;
  const subjectFilter = document.getElementById("subject-filter").value;
  const ageFilter = document.getElementById("age-filter").value;

  const filteredMaterials = learningMaterials.filter(material => {
    const matchesSearch = material.name.toLowerCase().includes(searchInput);
    const matchesType = typeFilter === "all" || material.type === typeFilter;
    const matchesSubject = subjectFilter === "all" || material.subject === subjectFilter;
    const matchesAge = checkAgeFilter(material.age, ageFilter);
    return matchesSearch && matchesType && matchesSubject && matchesAge;
  });

  renderCards(filteredMaterials);
}

function checkAgeFilter(materialAge, selectedAge) {
  if (selectedAge === "all") return true;

  const [minAge, maxAge] = extractGradeRange(materialAge);
  return selectedAge >= minAge && selectedAge <= maxAge;
}

function extractGradeRange(ageString) {
  const ageRanges = {
    "Grades K - 12": [0, 12],
    "Grades K - 1": [0, 1],
    "Grades 2 - 3": [2, 3],
    "Grades 4 - 5": [4, 5],
    "Grades 6 - 8": [6, 8],
    "Grades 9 - 12": [9, 12],
    "Grades 11 - 12": [11, 12],
    "Grades 6 - 11": [6, 11],
    "Grades 10 - 12": [10, 12],
    "Grades 2 - 12": [2, 12],
    "Grades 4 - 12": [4, 12],
    "Grades 6 - 12": [6, 12],
    "Grades 7 - 12": [7, 12],
    "Grades 6 - 9": [6, 9],
  };

  return ageRanges[ageString] || [0, 12];
}

function goBack() {
  window.location.href = 'dashboard.html'; // Redirect to dashboard.html
}