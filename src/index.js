const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, err => {
    if (err) {
        console.info('Could not start server');
    } else {
        console.info('Server running on port', PORT)
    }
});
