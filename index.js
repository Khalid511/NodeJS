const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost', port = 3000;

const app = express();
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

app.use('/dishes', dishRouter);
app.use('/dishes/:dishId', dishRouter);
app.use('/promotions', promoRouter);
app.use('/promotions/:promoId', promoRouter);
app.use('/leaders', leaderRouter);
app.use('/leaders/:leaderId', leaderRouter);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());



app.use((req, res, next) => {
    
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
}
);


const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});