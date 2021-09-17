const express = require('express');
const app = express();
var mongoose = require('mongoose');
var userRoute = require('./server/server.user.route');
const bodyParser = require('body-parser');

mongoose.connect(`mongodb://localhost/shopcart`, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useFindAndModify: false
})
app.use(bodyParser.json({ limit: '100mb' }))
// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('success', 'Mongoose default connection open to ' + `http://localhost:4040.`);
});
// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log('error', 'Mongoose default connection error: ' + err);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('warning', 'Mongoose default connection disconnected');
});



app.use('/api/user', userRoute)

app.listen(4040, () => {
    console.log('server running on port : 4040')
})