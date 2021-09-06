const express = require('express');
const conectarDB = require('./config/db');
const cors = require('cors');

// Crear el Servidor
const app = express();

// Conectar a la base de datos
conectarDB();

// Habilitar CORS
app.use(cors());

// Habilitar express.json
app.use(express.json({ extended: true }));

// Puerto de la App
const PORT = process.env.PORT || 4000;

// Definir la pagina principal
// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// });

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/proyectos', require('./routes/proyectos'));
app.use('/api/tareas', require('./routes/tareas'));

// Arrancar la App
app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${ PORT }`);
});