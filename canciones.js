var express = require('express');
var router = express.Router(); 
var path = require('path');


/////MIDDLEWARES/////

router.use(function (req, res, next) {
    req.tiempo = Date.now();
    console.log('Time: ', req.tiempo);
    next();
  });
   
  router.use('/canciones', function (req, res, next) {
      console.log('Time2: ', Date.now());
      next();
    }
  );

  ///RUTAS////

  router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,'/canciones.html'));
  });  

  router.get('/descargas', function (req, res) { /* /canciones/descargas/ */
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />'+
    '</head>'+
    '<body>'+
    'Descarga de canciones' +
    '<br>' +
    '<table>'+
    '<tbody>'+
    '<tr>'+
        '<td></td>'+
           '<th>Canciones</th>'+       
        '</tr>'+
        '<tr>'+
           '<th>1</th>'+
            '<td> <a href="/descarga">Descarga cancion Here comes the sun de The Beatles!</a> </td>'+
        '</tr>'+
        '<tr>'+
            '<th>2</th>'+
            '<td> <a href="/descarga">Descarga cancion Boyfriend de Dove Cameron!</a></td>'+
        '</tr>'+
        '<tr>'+
            '<th>3</th>'+
            '<td> <a href="/descarga">Descarga cancion This Boots are made for walking de Nancy Sinatra!</a></td>'+
        '</tr>'+
        '<tr>'+
            '<th>4</th>'+
            '<td> <a href="/descarga">Descarga cancion Birds de Imagine Dragons!</a></td>'+
        '</tr>'+
        '<tr>'+
            '<th>5</th>'+
            '<td> <a href="/descarga">Descarga cancion Lost on you de LP!</a></td>'+
        '</tr>'+
        '</tbody>'+
'</table>'+

    '</body>'+
    '</html>';
    res.send(body);
});

//AUTOR//   /* /canciones/acerca/ */
  var autor = [
    {nombre: "Sileny", apellido: "Benitez", numero_de_cuenta: '61811417', carrera: 'Ing. en Informática', descripcion:"Me esforcé mucho por realizar esta tarea y entenderle. Espero sea de su agrado Ingeniero. Gracias."}
];
router.get('/acerca',function (req, res) {
	res.json(autor);
});

///post, put, delete///
router.post('/', function(req, res) {
    res.send('Respuesta a post ');
  });
router.put('/', function(req, res) {
    res.send('Respuesta a put');
  });
  
router.delete('/', function(req, res) {
    res.send('Respuesta a delete');
  });
  
 

module.exports = router;

