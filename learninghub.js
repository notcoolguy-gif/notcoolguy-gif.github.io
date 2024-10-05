function openModal(topic) {
  // Define content for each topic with images and scientist names
  const content = {
    'myths-facts': `
      <h2>Exoplanet Myths and Facts 🌌</h2>
      <p><strong>Myth 1:</strong> Exoplanets are too far away to study. <br>
      <strong>Fact:</strong> Despite their distance, advances in technology allow us to detect and study exoplanets through various methods such as the transit method and radial velocity.</p>
      <img src="https://shorturl.at/7jHXF" alt="Exoplanets are too far away to study" />
      <p><strong>Myth 2:</strong> All exoplanets are similar to Earth. <br>
      <strong>Fact:</strong> Exoplanets come in a wide variety of sizes, compositions, and environments. Some are gas giants similar to Jupiter, while others might be rocky like Earth or even icy.</p>
      <img src="https://shorturl.at/inxNX" alt="All exoplanets are similar to Earth" />
      <p><strong>Myth 3:</strong> We cannot learn much about exoplanet atmospheres. <br>
      <strong>Fact:</strong> By analyzing starlight passing through an exoplanet’s atmosphere, scientists can gather information about its composition, which may reveal the presence of water or other important gases.</p>
      <img src="https://shorturl.at/AGZLn" alt="We cannot learn much about exoplanet atmospheres" />
      <p><strong>Myth 4:</strong> Only large exoplanets can be detected. <br>
      <strong>Fact:</strong> With advanced techniques, even smaller exoplanets, including those in the habitable zone, can be detected and studied. The discovery of smaller, Earth-sized exoplanets is becoming more common.</p>
      <img src="https://shorturl.at/xCvL8" alt="Only large exoplanets can be detected" />
      <p>By separating myths from facts, we can better understand the true nature of exoplanets and their role in the broader universe. 🌟</p>
    `,
    'detection': `
      <h2>Methods of Detection 🔍</h2>
      <p>The search for exoplanets involves several key methods, each with its unique approach and advantages:</p>
      <p><strong>Transit Method 🌠:</strong> The Transit Method involves monitoring a star’s brightness over time. When an exoplanet passes in front of its host star, it causes a temporary dip in the star’s light. By analyzing these periodic dips, scientists can determine the presence and characteristics of the exoplanet. 🌟</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/vka0W8tn4EU?si=vKNKpIJm1qixMsgr" title="Transit Method Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p><strong>Radial Velocity 📉:</strong> The Radial Velocity method detects exoplanets by measuring changes in the star's velocity due to the gravitational pull of an orbiting planet. As the planet orbits, it causes the star to wobble slightly, resulting in periodic shifts in the star’s spectral lines. 📈</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/1mqMyn06zAY?si=hJpdS6-hvbC7i3Zt" title="Radial Velocity Video" frameborder="0" allowfullscreen></iframe>
      <p><strong>Direct Imaging 📸:</strong> Direct Imaging involves capturing images of exoplanets by blocking out the light from their host stars. This method is challenging due to the brightness of stars but can provide detailed information about the planet’s atmosphere and surface. 📷</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gX5E2gLbIZo?si=rvy-_C-DM3dLs5PE" title="Direct Imaging Video" frameborder="0" allowfullscreen></iframe>
      <p><strong>Gravitational Microlensing 🔭:</strong> Gravitational Microlensing utilizes the gravitational field of a star or planet to magnify the light from a more distant background star. When a planet passes in front of the background star, it creates a detectable and temporary increase in brightness. 🌌</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/_aZZt8dM-_0?si=ui6UDKtn9n32lfE2" title="Gravitational Microlensing Video" frameborder="0" allowfullscreen></iframe>
      <p><strong>Astrometry 📐:</strong> Astrometry measures the precise positions and movements of stars to detect the gravitational influence of an orbiting planet. This method involves detecting very small changes in the star's position caused by the planet’s gravitational pull. 📏</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/l46-8PvT44Y?si=nl756DEJHXnrSMUE" title="Astrometry Video" frameborder="0" allowfullscreen></iframe>
      <p>Each of these methods contributes to our understanding of exoplanets and their characteristics. By combining data from multiple techniques, scientists can build a more complete picture of these distant worlds. 🌠</p>
    `,
    'habitable': `
      <h2>Habitable Zones 🌍</h2>
      <p>The habitable zone, or "Goldilocks zone," is the region around a star where conditions might be right for liquid water to exist on a planet's surface. 🌡️ This zone is crucial in the search for extraterrestrial life, as water is a key ingredient for life as we know it. 💧</p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/J04YN9azln8?si=YszLXhYkv7mTEJx2" title="Goldilocks Zone Video" frameborder="0" allowfullscreen></iframe>
      <p>Planets located within this zone are considered the most promising candidates for finding life. 🌌 However, other factors such as planetary atmosphere and geological activity also play important roles in determining habitability. 🌍</p>
      <img src="https://shorturl.at/ThPuq" alt="Extraterrestrial Life" />
      <p>Additionally, the presence of a stable atmosphere and geological activity can significantly impact a planet’s habitability. 🌍</p>
      <img src="https://shorturl.at/OYCQc" alt="Planetary Atmosphere and Geological Activity" />
    `,
    'atmospheres': `
      <h2>Atmospheres & Composition ☁️</h2>
      <p>The composition of an exoplanet's atmosphere can tell us a lot about its climate and potential for life. 🌪️ Scientists analyze atmospheric data to look for signs of water vapor, methane, and other gases that could indicate biological activity or suitable conditions for life. 🌬️</p>
      <img src="https://shorturl.at/iXlFm" alt="Analyze atmospheric data" />
      <p>Atmospheric layers can vary greatly between different types of exoplanets. For example, gas giants may have thick, multi-layered atmospheres, while rocky planets might have thinner, more complex atmospheres. 🌠</p>
      <img src="https://shorturl.at/33FW1" alt="Rocky planet composition" />
      <p>Studying atmospheres helps researchers understand exoplanet climates and potential habitability. The more we learn about these distant worlds, the better we can identify those that might share characteristics with Earth. 🌍</p>
      <img src="https://shorturl.at/CVCjz" alt="Gas giant composition" />
    `,
    'discoveries': `
      <h2>Famous Exoplanet Discoveries 🌟</h2>
      <p><strong>51 Pegasi b:</strong> Discovered in 1995, 51 Pegasi b was the first exoplanet found orbiting a Sun-like star. Its discovery was groundbreaking and opened the door to the search for other planets beyond our solar system. 🌌</p>
      <img src="https://shorturl.at/LdvcZ" alt="51 Pegasi b" />
      <p><em>Scientists: Didier Queloz and Michel Mayor</em></p>
      
      <p><strong>Kepler-22b:</strong> Found by NASA's Kepler mission in 2011, Kepler-22b is one of the first confirmed exoplanets in the habitable zone of a star similar to our Sun. Its size and location make it an intriguing candidate for habitability. 🌍</p>
      <img src="https://shorturl.at/KWc1H" alt="Kepler-22b" />
      <p><em>Scientist: Jon Jenkins</em></p>
      
      <p><strong>TRAPPIST-1 System:</strong> This system, discovered in 2017, has seven Earth-sized planets orbiting a small, cool star. Three of these planets are located in the habitable zone, making it an exciting target for further study. 🔭</p>
      <img src="https://shorturl.at/TRjC1" alt="TRAPPIST-1 System" />
      <p><em>Scientist: Michaël Gillon</em></p>
      
      <p><strong>Proxima Centauri b:</strong> Discovered in 2016, Proxima Centauri b is the closest known exoplanet to our solar system and orbits within the habitable zone of the star Proxima Centauri. Its proximity makes it an intriguing target for future exploration. 🚀</p>
      <img src="https://shorturl.at/fBjZd" alt="Proxima Centauri b" />
      <p><em>Scientist: Guillem Anglada-Escudé</em></p>
      
      <p>Each of these discoveries has expanded our understanding of the universe and our place within it, highlighting the vast diversity of worlds that exist beyond our solar system. 🌌</p>
    `
  };

   // Get the modal and content elements
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modal-body");

  // Set the modal content based on the selected topic or fallback
  modalContent.innerHTML = content[topic] || "<p>Content not found.</p>";

  // Display the modal
  modal.style.display = "block";
  
  // Set focus to close button for accessibility
  modal.querySelector("#close-button").focus();
}

function closeModal() {
  // Hide the modal
  const modal = document.getElementById("modal");
  modal.style.display = "none";

  // Stop all videos in the modal
  const iframes = modal.querySelectorAll("iframe");
  iframes.forEach(iframe => {
    const src = iframe.src;
    iframe.src = src; // Reset the src to stop the video
  });

  // Optionally return focus to the triggering element
  // document.getElementById("trigger-element-id").focus();
}

// Redirect to dashboard.html
function goToDashboard() {
  window.location.href = "dashboard.html";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
}

// Close the modal when the user presses the "Esc" key
window.onkeydown = function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

// Add event listener to back button
document.getElementById("back-button").addEventListener("click", goToDashboard);