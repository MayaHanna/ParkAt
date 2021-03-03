const express = require('express');
const app = express();
const routes = require('./Routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const fs = require("fs");
const cors = require("cors");


const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let server;
if (process.env.NODE_ENV === "production") {
    const key = fs.readFileSync(__dirname + '/../certs/selfsigned.key');
    const cert = fs.readFileSync(__dirname + '/../certs/selfsigned.crt');
    const options = {
        key: key,
        cert: cert
    };

    server = require('https').Server(options, app);
} else {
    server = require('http').Server(app);
}

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
});

server.listen(port, () => console.log(`app listening on port ${port}!`));