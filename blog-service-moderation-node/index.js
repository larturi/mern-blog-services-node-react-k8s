const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.includes('orange') ? 'rejected' : 'approved';

        await axios.post('http://eventbus-srv:8000/events', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
            .catch((err) => {
                console.log(err);
            });
    }

    res.send({ status: 'OK' });
});

app.listen(4003, () => {
    console.log('Moderation Service');
    console.log('Listening on port 4003');
});