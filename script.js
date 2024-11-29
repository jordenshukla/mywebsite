// teacher array with properties & attributes for each teacher (object), this contains all the teachers (names, image, hp, type, attacks, attack energy, attack damage, special skill)
// We will later grab from this array to build each card
const teachers = [
  {
    teacher_name: "Hao Ma",
    image: "./imgs/hao.png",
    hp: "60",
    type: "Poison",
    attacks: {
      attack_1: {
        attack_name: "ERD",
        attack_damage: "30",
        attack_energy_require: "1",
      },
      attack_2: {
        attack_name: "Common Sense",
        attack_damage: "120",
        attack_energy_require: "4",
      },
    },
    special_skill: "Create Procedure",
  },
  {
    teacher_name: "Reena Alias",
    image: "./imgs/reena.png",
    hp: "80",
    type: "Grass",
    attacks: {
      attack_1: {
        attack_name: "SMARTER Goals",
        attack_damage: "40",
        attack_energy_require: "2",
      },
      attack_2: {
        attack_name: "SWOT Analysis",
        attack_damage: "80",
        attack_energy_require: "3",
      },
    },
    special_skill: "Dark Triad Attack",
  },
  {
    teacher_name: "Johnny Zhang",
    image: "./imgs/johnny.png",
    hp: "150",
    type: "Fire",
    attacks: {
      attack_1: {
        attack_name: "2 Marks Off",
        attack_damage: "50",
        attack_energy_require: "2",
      },
      attack_2: {
        attack_name: "On the Middleterm",
        attack_damage: "200",
        attack_energy_require: "4",
      },
    },
    special_skill: "Read the PPT",
  },
  {
    teacher_name: "Matt Rockall",
    image: "./imgs/matt.png",
    hp: "180",
    type: "Rock",
    attacks: {
      attack_1: {
        attack_name: "MCQ",
        attack_damage: "50",
        attack_energy_require: "2",
      },
      attack_2: {
        attack_name: "Graphic Highlighting",
        attack_damage: "80",
        attack_energy_require: "3",
      },
    },
    special_skill: "No Final",
  },
  {
    teacher_name: "Chris Harris",
    image: "./imgs/chris.png",
    hp: "140",
    type: "Water",
    attacks: {
      attack_1: {
        attack_name: ".py",
        attack_damage: "70",
        attack_energy_require: "3",
      },
      attack_2: {
        attack_name: "def destroy():",
        attack_damage: "110",
        attack_energy_require: "4",
      },
    },
    special_skill: "Syntax Error ",
  },
  {
    teacher_name: "Akila Ramani",
    image: "./imgs/akila.png",
    hp: "999",
    type: "Ice",
    attacks: {
      attack_1: {
        attack_name: "Evaluation",
        attack_damage: "60",
        attack_energy_require: "2",
      },
      attack_2: {
        attack_name: "Battleship.js",
        attack_damage: "120",
        attack_energy_require: "4",
      },
    },
    special_skill: "Open Book",
  },
  {
    teacher_name: "Sandra Merchant",
    image: "./imgs/sandi3.png",
    hp: "170",
    type: "Ground",
    attacks: {
      attack_1: {
        attack_name: "Floating Point",
        attack_damage: "1.10000",
        attack_energy_require: "1",
      },
      attack_2: {
        attack_name: "OR Logic Gate",
        attack_damage: "130",
        attack_energy_require: "3",
      },
    },
    special_skill: "Gauss-Jordan",
  },
];

// Another array containing rarity objects. Each rarity (object) has their own name, probability of getting "drawn" from the functions later, and color
const rarities = [
  { name: "Common", probability: 0.5, color: "#f0f0f0" }, 
  { name: "Uncommon", probability: 0.3, color: "#b3e6b3" }, 
  { name: "Rare", probability: 0.1, color: "#b3d9ff" }, 
  { name: "Epic", probability: 0.04, color: "#d1b3ff" }, 
  { name: "Mythic", probability: 0.01, color: "#ffd1a3" }, 
  { name: "Legendary", probability: 0.005, color: "#fff2b3" }, 
];

// This function creates each card
// Generates a random number between 0-1 and assigns it into a variable called luck
// Assigns the variable card_rarity the default of common
// Assigns the variable rarity_color the default of grey
// Assigns the variable current_luck to starting of 0
function generateCard() {
  let luck = Math.random();
  let card_rarity = "Common";
  let rarity_color = "#c0c0c0"; 
  let current_luck = 0;


  // This for loop picks a random rarity out of the rarities array
  // Declare a variable i = 0; Condition is i < length of rarities; increment i by 1 each time
  // Add the probability of the current rarity to the current_luck variable
  // Checks if the random number generated from before (between 0-1) is less than current_luck
  // Re-assign the variable card_rarity and rarity_color
  for (let i = 0; i < rarities.length; i++) {
    current_luck += rarities[i].probability;
    if (luck < current_luck) {
      card_rarity = rarities[i].name;
      rarity_color = rarities[i].color;
      break;
    }
  }

  // Assign the teacherIndex variable by generating a random number between 0-1, than multiplies that number the length of the teachers array, then Math.floor() rounds the number down
  // Assign the teacher variable to the index of the previsouly randomly chosen teacher out of the teacher array
  let teacherIndex = Math.floor(Math.random() * teachers.length);
  let teacher = teachers[teacherIndex];

  // Assign the card variable to a newly created div element
  // Assign card (div) a class of cardName
  // Change the card (div) style (background color) to the previously chosen rarity color
  const card = document.createElement("div");
  card.className = "card";
  card.style.backgroundColor = rarity_color; 

  // Change the HTML
  // Using the randomly chosen teacher and teacher properties, card and card properties, and rarity and rarity properties, create the card using html and css classes
  // This is all basic html, however, we use the randomly chosen aspects to randomly create the card using javascript
  // The reason the card is vcreated throiugh javascript and not mainyl just HTML and CSS, is becuse then we would have had to have made a css class for every possibility of teacher and their corresnponding rarity
  // This is dumb ^
  // After the card is created, return the card
  card.innerHTML = `
    <div class="card-header">
        <div class="rarity">${card_rarity}</div>
        <div class="hp">${teacher.hp} HP</div>
    </div>
    <div class="card-image">
        <img src="${teacher.image}" alt="${teacher.teacher_name}">
    </div>
    <div class="card-name">
        ${teacher.teacher_name}
    </div>
    <div class="card-type">
        Type: ${teacher.type}
    </div>
    <div class="card-content">
        <div class="energy">
            <div>${teacher.attacks.attack_1.attack_energy_require} ${teacher.attacks.attack_1.attack_name}</div>
            <div class="attack-damage">${teacher.attacks.attack_1.attack_damage}</div>
        </div>
        <div class="energy">
            <div>${teacher.attacks.attack_2.attack_energy_require} ${teacher.attacks.attack_2.attack_name}</div>
            <div class="attack-damage">${teacher.attacks.attack_2.attack_damage}</div>
        </div>
    </div>
    <div class="special-skill">Special Skill: ${teacher.special_skill}</div>
  `;
  return card;
}

// This function opens the pack
// Assign the variable main_area the div with the class of "main_area" in the html file
// Assign the pack variable to the div with the class of "pack" in the html file
// Change the pack variable style to not display
// Assign the variable cardContainer to a newly created div element
// Assign the variable cardContainer a class name of "card-container"
function packOpen() {
  const main_area = document.getElementById("main_area");
  const pack = document.getElementById("pack");
  pack.style.display = "none"; 

  const cardContainer = document.createElement("div");
  cardContainer.className = "card-container";

  // Use a for loop to generate 5 cards using the previous functions
  for (let i = 0; i < 5; i++) {
    const card = generateCard();
    cardContainer.appendChild(card);
  }


  // Assign the variable refreshButton to create a new button element
  // Assign the class name of "refresh_buttton" to the refreshButton variable
  // Put the text of "Reset Pack" in the button
  // Assign a event listener of on-click to the resfreshButton to run the resetPack() function when clicked
  const refreshButton = document.createElement("button");
  refreshButton.className = "refresh_button";
  refreshButton.innerText = "Reset Pack";
  refreshButton.onclick = () => resetPack();

  main_area.appendChild(cardContainer);
  main_area.appendChild(refreshButton);
}

// This function resets the pack
// Assign the variable main_area to the div with he class name "main_area"
// Change the html to reset the pack to what it was before/when it started
function resetPack() {
  const main_area = document.getElementById("main_area");
  main_area.innerHTML = `
    <div class="pack" id="pack">
        <button class="pack_button" id="pack_button" onclick="packOpen()">BCIT</button>
    </div>
  `;
}


document.addEventListener("DOMContentLoaded", () => {
  const musicTracks = [
    "./audio/Pokémon-Movie05-BGM-Going-to-Latios.m4a",
    "./audio/Pokémon-Omega-Ruby-Alpha-Sapphire-Zinnia-Battle-Music-HQ.m4a", // Music tracks 
    "./audio/Pokémon-Sun-Moon-Battle-Legend-Red-Blue-Battle-Music-HQ.m4a",
  ];

  let currentTrackIndex = 0; // Start with the first track
  let isPlaying = true; // Tracks the play/pause state

  const audioElement = document.getElementById("audio");
  const musicButton = document.getElementById("musicButton");

  // Update the music source and play
  function updateTrack() {
    audioElement.src = musicTracks[currentTrackIndex];
    audioElement.play();
    musicButton.src = "./sprites/Music-On@2x.png"; // Update to play icon
    isPlaying = true;
  }

  // Toggle music play/pause
  function toggleMusic() {
    if (isPlaying) {
      audioElement.pause();
      musicButton.src = "./sprites/Music-Off@2x.png"; // Update to pause icon
    } else {
      audioElement.play();
      musicButton.src = "./sprites/Music-On@2x.png"; // Update to play icon
    }
    isPlaying = !isPlaying;
  }

  // Go to the next track
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % musicTracks.length; // Loop back to the first track
    updateTrack();
  }

  // Go to the previous track
  function previousTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + musicTracks.length) % musicTracks.length; // Loop to the last track
    updateTrack();
  }

  // Event listeners for buttons
  document.getElementById("music-next").addEventListener("click", nextTrack);
  document.getElementById("music-prev").addEventListener("click", previousTrack);
  musicButton.addEventListener("click", toggleMusic);
});



