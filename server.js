// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/led', (req, res) => {
    const { r, g, b } = req.query;
    console.log(`LED Farbe: R=${r}, G=${g}, B=${b}`);

    // Hier z.B. über GPIO oder serielle Verbindung den LED-Streifen steuern
    // z. B. mit rpi-ws281x-native, FastLED via ESP oder MQTT senden

    res.sendStatus(200);
});

app.listen(PORT, () => {
    console.log(`Dashboard läuft auf http://localhost:${PORT}`);
});