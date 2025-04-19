const Sequelize = require('sequelize');
const connection = require('../database');

const Res_entregas = require('../models/Res_entregas');

module.exports = {
    async index(req, res) {
        const res_entregas = await Res_entregas.findAll();

        return res.json(res_entregas);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT res_entregas.id AS id, res_entregas.cdempresa AS cdempresa, res_entregas.sequen AS sequen, ';
        qry = qry +   'res_entregas.classif AS classif, res_entregas.qtde AS qtde, ';
        qry = qry +   'res_entregas.valor AS valor, res_entregas.perc AS perc ';
        qry = qry + 'FROM res_entregas ';
        qry = qry + 'WHERE res_entregas.cdempresa = "' + cdempresa + '"';

        const res_entregas = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(res_entregas);
    }

};