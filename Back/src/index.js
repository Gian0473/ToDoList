const app = require('./app'); // se instanvia la aplicacion 

// inicializar el servidor
//con el listen escucha el puerto
//la funcion flecha para revisar que este bien 
app.listen(app.get('port'), () => {
    console.log('servidor escuchando por el puerto: ', app.get('port'));
});
