const express = require('express');
const app = express();
const routes = require('./Routes');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");

let port = 5000;

app.use(cors({
    origin: "*",
    methods: "GET, PATCH, POST, DELETE",
    credentials: true,
    headers: "X-Requested-With, Content-Type, Accept, Authorization, Save-Data, Accept-Ranges"
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = require('http').Server(app);

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