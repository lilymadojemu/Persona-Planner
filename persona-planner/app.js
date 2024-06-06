const express = require("express");
// To read the JSON files
const fs = require('fs');
const app = express();

// Parse Each JSON File Separately
const socialLinkAvailData = JSON.parse(fs.readFileSync('social_links_avail.json'));
const linkEpisodeData = JSON.parse(fs.readFileSync('link_eps_avail.json'));
const socialLinkUnlockCriteriaData = JSON.parse(fs.readFileSync('sl_unlock_criteria.json'));

// Defining Routes：
app.get('/social-link-avail', (req, res) => {
    // Render HTML template and pass social link availability data as a variable
    res.render('social-link-avail-template', { socialLinkAvailData });
});

app.get('/link-episode', (req, res) => {
    // Render HTML template and pass link episode data as a variable
    res.render('link-episode-template', { linkEpisodeData });
});

app.get('/social-link-unlock-criteria', (req, res) => {
    // Render HTML template and pass social link unlock criteria data as a variable
    res.render('social-link-unlock-criteria-template', { socialLinkUnlockCriteriaData });
});

// Set up a server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
