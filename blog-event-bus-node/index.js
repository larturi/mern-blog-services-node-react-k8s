const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const events = [];

app.post('/events', (req, res) => {
    const event = req.body;

    events.push(event);

    // Posts Service
    axios.post('http://posts-srv-cluster-ip:4000/events', event).catch(err => console.log);
    // Comments Service
    axios.post('http://comments-srv:4001/events', event).catch(err => console.log);    
    // Query Service
    axios.post('http://query-srv:4002/events', event).catch(err => console.log);
    // Moderation Service
    axios.post('http://moderation-srv:4003/events', event).catch(err => console.log);

    res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
    res.send(events);
})

app.listen(8000, () => {
    console.log('Event Bus Service');
    console.log('Listening on port 8000');
});