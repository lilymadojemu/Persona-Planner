
// const express = require("express");
// // To read the JSON files
// const fs = require('fs');
// const app = express();

// Parse Each JSON File Separately
const socialLinkAvailData = JSON.parse(fs.readFileSync('social_links_avail.json'));
const linkEpisodeData = JSON.parse(fs.readFileSync('link_eps_avail.json'));
const socialLinkUnlockCriteriaData = JSON.parse(fs.readFileSync('sl_unlock_criteria.json'));
const calendarData = JSON.parse(fs.readFileSync('calendar_events.json'));

// Defining Routes：
app.get('/social-link-avail', (req, res) => {
    // Render HTML template and pass social link availability data as a variable
    res.render('social-link-avail-template', { socialLinkAvailData });
});
app.get('/home', (req, res) => {
    res.render('home-template', {
        socialLinkAvailData: JSON.stringify(socialLinkAvailData)
    });
});

app.get('/link-episode', (req, res) => {
    // Render HTML template and pass link episode data as a variable
    res.render('link-episode-template', { linkEpisodeData });
});

app.get('/social-link-unlock-criteria', (req, res) => {
    // Render HTML template and pass social link unlock criteria data as a variable
    res.render('social-link-unlock-criteria-template', { socialLinkUnlockCriteriaData });
});

app.get('/calendar-events', (req, res) => {
    // Render HTML template and pass social link unlock criteria data as a variable
    res.render('calendar-events-template', { calendarData });
});

// Want characters to populate when webpage loads
document.addEventListener('DOMContentLoaded', function() {
    // Access the JSON data embedded in the HTML
    const socialLinkDataScript = document.getElementById('socialLinkData');
    const socialLinkCharacterData = JSON.parse(socialLinkDataScript.textContent);

    // Populate characters on the page
    populateCharacters(socialLinkCharacterData);

    // Put characters on the page
    for (const key in socialLinkCharacterData) {
        // Need to make sure only new characters are being added to the page
        if (characterName == key) {
            const characterElement = createCharacter(socialLinkCharacterData[key]);
            addNewCharacter(characterElement);
        }
    }
});
// Putting a new character's Info on the Page
function addNewCharacter() {
    const socialLinkCharacterData = new Character();
    return socialLinkCharacterData; 
}; 

function populateCharacters(socialLinkCharacterData) {
    const characterContainer = document.getElementById('socialLinkCharacter');

    for (const characterKey in socialLinkCharacterData) {
        if (socialLinkCharacterData.hasOwnProperty(characterKey)) {
            const characterInfo = socialLinkCharacterData[characterKey];
            const characterElement = createSocialLinkCharacter(characterInfo);
            addNewSocialLinkCharacter(container, characterElement);
        }
    }
};

function createSocialLinkCharacter(characterInfo) {
    // Grabs a reference to the socialLinkCharacter template:
    const template = document.querySelector('#socialLinkCharacter');
    const clone = template.content.cloneNode(true);
    // update Dom Elements

    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');
    // Would just input character image path (standardize it)
    const img = document.createElement('img');
    img.src = characterInfo.image;
    img.alt = characterInfo.name;

    const name = document.createElement('h3');
    name.textContent = characterInfo.name;

    const rankInput = document.createElement('input');
    rankInput.type = 'text';
    rankInput.placeholder = 'Rank 0-10';
    rankInput.value = characterInfo.rank || '';

    characterDiv.appendChild(img);
    characterDiv.appendChild(name);
    characterDiv.appendChild(rankInput);

    return characterDiv;
};
function addNewSocialLinkCharacter(container, characterElement) {
    container.appendChild(characterElement);
}

// Trigger to Output the Calendar with Events
document.addEventListener