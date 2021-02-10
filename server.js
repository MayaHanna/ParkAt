const express = require('express')
const app = express();
const routes = require('./Routes');
const server = require('http').Server(app);
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');

const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

server.listen(port, () => console.log(`app listening on port ${port}!`))