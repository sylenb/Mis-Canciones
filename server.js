var canciones = require('./canciones');
var express = require('express');
var path = require('path');
var app = express();

app.listen(3000, function () {
  console.log('Escuchando en puerto 3000!');
});

app.use(express.static(path.join(__dirname, 'public')));

///////ROUTER//////
app.use('/canciones', canciones);

/////descarga de las 5 canciones/////

app.get('/descarga', function(req, res) {
    res.download(path.join(__dirname,'public','files','cancion1.pdf'),'Boyfriendsong.pdf',
        function(err){
            if (err)
                console.log('Ocurrio un error en la descarga.');
            else
                console.log('Descarga exitosa.');
        });
});

 
app.get('/google', function (req, res) {
    res.redirect('http://google.com');
});
app.use(function(req, res, next) {
  res.status(404).send('Esa pagina no existe!');
});


