const express = require('express');
//const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../../webpack.config');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000));
app.use('/build',express.static('build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(webpackDevMiddleware(webpack(webpackConfig)));


app.use(require('./routes/routes'));


app.get('/', function(req,res, next){
    res.send('EWebik');
});

app.listen(app.get('port'), ()=>{
    console.log("Server active on port 3000");
}); 