const Sequelize = require('sequelize');
const connection = require('../database');

const Usuario = require('../models/Usuario');
const { update } = require('../models/Usuario');

module.exports = {
    async index(req, res) {
        const usuario = await Usuario.findAll();

        return res.json(usuario);
    },

    async index_one(req, res) { 

        const { cdempresa, email } = req.params;

        var qry = '';
        qry = qry + 'SELECT usuarios.id AS id, usuarios.cdempresa AS cdempresa, usuarios.nome AS nome, ';
        qry = qry +   'usuarios.email AS email, usuarios.senha AS senha ';
        qry = qry + 'FROM usuarios ';
        qry = qry + 'WHERE usuarios.email = "' + email + '" ';
        qry = qry + '  AND usuarios.cdempresa = "' + cdempresa + '"';

        const usuario = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(usuario);
    },

    async store(req, res) {
        const { cdempresa, nome, email, senha } = req.body;

        const usuario = await Usuario.create({ cdempresa, nome, email, senha });

        return res.json(usuario);
    },

    async update(req, res) {
        const { usuario_id } = req.params;

        const { cdempresa, nome, email, senha } = req.body;

        const usuario = await Usuario.findByPk(usuario_id);
        
        if (!usuario) {
            return res.status(400).json({ error: 'Usuario not found' });
        }

        await Usuario.update( { cdempresa, nome, email, senha }, { where: { id: usuario_id } } );

        return res.json();
    },

    async delete(req, res) {
        const { usuario_id } = req.params;

        const usuario = await Usuario.findByPk(usuario_id);
        if (!usuario) {
            return res.status(400).json({ error: 'Usuario not found' });
        }

        await Usuario.destroy( { where: { id: usuario_id } } );

        return res.json();
    }

};