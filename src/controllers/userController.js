const UserService = require('../services/userService');

/**
 * Controlador para la entidad Usuario.
 * Se encarga de recibir las peticiones HTTP, comunicarse con el servicio
 * y enviar la respuesta correspondiente al cliente.
 */
class UserController {

    /**
     * Maneja la petición para obtener todos los usuarios.
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    static async getUsers(req, res) {
        try {
            // Delegamos la lógica de obtención de datos al servicio
            const users = await UserService.getAllUsers();
            
            // Retornamos la lista con status 200 (OK)
            res.status(200).json(users);
        } catch (error) {
            // Errores de servidor o base de datos caen aquí
            res.status(500).json({ error: 'Error interno en el servidor' });
        }
    }

    /**
     * Maneja la petición para crear un nuevo usuario.
     * @param {import('express').Request} req 
     * @param {import('express').Response} res 
     */
    static async create(req, res) {
        try {
            /**
             * Enviamos el cuerpo de la petición (JSON) al servicio.
             * req.body debe mapear con los campos del modelo: firstName, lastName, email.
             */
            const newUser = await UserService.createUser(req.body);

            // Retornamos el recurso creado con status 201 (Created)
            res.status(201).json(newUser);
        } catch (error) {
            /**
             * Errores de validación (ej: email duplicado) caen aquí.
             * Retornamos status 400 (Bad Request).
             */
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = UserController;