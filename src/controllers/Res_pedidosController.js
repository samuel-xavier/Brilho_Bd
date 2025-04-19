const Sequelize = require('sequelize');
const connection = require('../database');

const Res_pedidos = require('../models/Res_pedidos');

module.exports = {
    async index(req, res) {
        const res_pedidos = await Res_pedidos.findAll();

        return res.json(res_pedidos);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT res_pedidos.id AS id, res_pedidos.cdempresa AS cdempresa, res_pedidos.sequen AS sequen, ';
        qry = qry +   'res_pedidos.classif AS classif, res_pedidos.qtde AS qtde, ';
        qry = qry +   'res_pedidos.valor AS valor, res_pedidos.perc AS perc ';
        qry = qry + 'FROM res_pedidos ';
        qry = qry + 'WHERE res_pedidos.cdempresa = "' + cdempresa + '"';
        
        const res_pedidos = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(res_pedidos);
    }

};