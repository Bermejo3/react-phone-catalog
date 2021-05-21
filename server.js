const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/react_phone_catalog'));
app.get('/*', function(req, res){
    res.sendFile("index.html", {root: __dirname + '/dist/react_phone_catalog/'});
})

app.listen(process.env.PORT || 8080)