const sequelize = require('./config/db.js'); 
// Importamos los modelos para que Sequelize los reconozca antes de sincronizar
const User = require('./models/User');
const Post = require('./models/Post');
const UserService = require('./services/userService.js');

const express = require('express');
const userRoutes = require('./routes/userRoutes.js'); // Importamos las rutas

const app = express();
const PORT = 3000;

// Middleware para que Express entienda JSON (muy importante para POST/PUT)
app.use(express.json());

// Vinculamos las rutas. 
// Todos los endpoints en userRoutes tendrán el prefijo /users
app.use('/api/v1/users', userRoutes);

async function startServer() {
    try {
        // Conectamos y sincronizamos DB
        await sequelize.authenticate();
        await sequelize.sync({ alter: true });
        console.log('✅ DB Conectada y Sincronizada');

        // para crear datos fake
        UserService.seed();

        // Iniciamos el servidor
        app.listen(PORT, () => {
            console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('❌ Error al iniciar:', error);
    }
}

startServer();


/* 
// 3. Prueba rápida: Crear un usuario y un post
const nuevoUsuario = await User.create({
    firstName: "Lucas",
    lastName: "Callamullo",
    email: "lucas@ejemplo.com"
});

await Post.create({
    text: "Mi primer post en Sequelize",
    authorId: nuevoUsuario.id // Usamos el ID del usuario recién creado
}); **/