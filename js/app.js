

// // Putting a new character's Info on the Page
// function addNewCharacter() {
//     const socialLinkCharacterData = new Character();
//     return socialLinkCharacterData; 
// }; 


// function populateCharacters(socialLinkCharacterData) {
//     const characterContainer = document.getElementById('socialLinkCharacter');

//     for (const characterKey in socialLinkCharacterData) {
//         if (socialLinkCharacterData.hasOwnProperty(characterKey)) {
//             const characterInfo = socialLinkCharacterData[characterKey];
//             const characterElement = createSocialLinkCharacter(characterInfo);
//             addNewSocialLinkCharacter(container, characterElement);
//         }
//     }
// };

const characterName = document.createElement("h2");

// CharacterInfo will contain the information about all the characters from the Social Link Availability JSON Data
function createSocialLinkCharacters(charactersInfo) {
    // Grabs a reference to the socialLinkCharacter template:
    const template = document.querySelector('#socialLinkCharacter');
    // const clone = template.content.cloneNode(true);
    // All social links' information
    console.log(charactersInfo);
    //
    //Getting character's Names
    for (const character in charactersInfo) {
        const characterName = document.querySelector('#characterName')
        characterName.textContent = charactersInfo[character].Character
        template.append(characterName)
    }

    //Getting Character Images

    // <label for="characterName"></label>
    // <input type="text" id="socialLinkRank" name="socialLinkRank" placeholder="Rank 0-10">

    // update Dom Elements
    // const characterDiv = document.createElement('div');
    // characterDiv.classList.add('character');
    // // Would just input character image path (standardize it)
    // const img = document.createElement('img');
    // img.src = characterInfo.image;
    // img.alt = characterInfo.name;

    // const name = document.createElement('h3');
    // name.textContent = characterInfo.name;

    // const rankInput = document.createElement('input');
    // rankInput.type = 'text';
    // rankInput.placeholder = 'Rank 0-10';
    // rankInput.value = characterInfo.rank || '';

    // characterDiv.append(img);
    // characterDiv.append(name);
    // characterDiv.append(rankInput);

    // return characterDiv;
};

function addNewSocialLinkCharacter(container, characterElement) {
    container.append(characterElement);
}

// Want characters to populate when webpage loads
document.addEventListener('DOMContentLoaded', function() {

    // Fetching JSON Data：

    // Social Link Availability Data
    (async () => {
        const response = await fetch(`http://127.0.0.1:5500/dataHandling/social_links_avail.json`);
        const socialLinkAvailData = await response.json()
        const stringifySocialLinkAvailData = JSON.stringify(socialLinkAvailData)
        const socialLinks = JSON.parse(stringifySocialLinkAvailData);
        // Creates all characters 
        createSocialLinkCharacters(socialLinks);
    })();

    // Link Episode Data
    (async () => {
        const response = await fetch(`http://127.0.0.1:5500/dataHandling/link_eps_avail.json`);
        const linkEpisodeData = await response.json()
        // console.log(linkEpisodeData)
    })();

    // Social Link Criteria Data
    (async () => {
        const response = await fetch(`http://127.0.0.1:5500/dataHandling/sl_unlock_criteria.json`);
        const socialLinkUnlockCriteriaData = await response.json()
        // console.log(socialLinkUnlockCriteriaData)
    })();

    // Calendar Data
    (async () => {
        const response = await fetch(`http://127.0.0.1:5500/dataHandling/calendar_events.json`);
        const calendarData = await response.json()
        // console.log(calendarData)
    })();
    // for (const key in socialLinkCharacterData) {
    //     // Need to make sure only new characters are being added to the page
    //     if (characterName == key) {
    //         const characterElement = createCharacter(socialLinkCharacterData[key]);
    //         addNewCharacter(characterElement);
    //     }
    // }
    // Populate characters on the page
    // populateCharacters(socialLinkCharacterData);


    // Access the JSON data embedded in the HTML
    // const socialLinkDataScript = document.querySelector('#socialLinkCharacter');
    // const socialLinkCharacterData = JSON.parse(socialLinkDataScript.textContent);
});

// // Trigger to Output the Calendar with Events
// document.addEventListener
