//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/multikart/browser'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/dist/multikart/browser/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 3037, () => {
    console.log("Server is listening on port  3004");
});