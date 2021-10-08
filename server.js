const express = require('express');
const app = express();

// dev server settings
if (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "testing") {
    require('dotenv').config();
    // for static site
    app.use('/', express.static(process.cwd() + '/dist', {extensions:['html']}));
    // custom 404
    app.get('*', function(req, res){
        res.status(404).sendFile(process.cwd() + '/dist/404.html');
    });
}

// set the port
app.set('port', (process.env.PORT || 8080));

// start the server
const server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port', app.get('port'));
});