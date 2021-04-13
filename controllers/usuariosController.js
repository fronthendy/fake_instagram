const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (request, response) => {
        let usuarios =  await Usuario.findAll();
        
        return response.json(usuarios);
    },
    create: async (request, response) => {
        let {nome, email, senha} = request.body;

        let novoUsuario = await Usuario.create({
            nome,
            email,
            senha
        });

        return response.json(novoUsuario);
    },
    update: async (request, response) => {
        let {id} = request.params;
        let { nome, email, senha } = request.body;
    }
}

module.exports = usuariosController;