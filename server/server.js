const express = require('express');
const app = express();

// dev server settings
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "testing") {
    require('dotenv').config();
    // for static site
    app.use('/', express.static(process.cwd() + '/dist', {extensions:['html']}));
    // for app routes (with react router)
    app.get('/app/*', (req, res) =>{
        res.sendFile(process.cwd() + '/dist/app.html');
    });
    // for testing
    exports.app = app;
}

// set the port
app.set('port', (process.env.PORT || 8080));

// start the server
const server = app.listen(app.get('port'), function() {
    app.emit("serverReady"); // trigger tests to start
    console.log('Express server listening on port', app.get('port'));
});