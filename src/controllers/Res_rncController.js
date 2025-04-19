const Sequelize = require('sequelize');
const connection = require('../database');

const Res_rnc = require('../models/Res_rnc');

module.exports = {
    async index(req, res) {
        const res_rnc = await Res_rnc.findAll();

        return res.json(res_rnc);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT res_rnc.id AS id, res_rnc.cdempresa AS cdempresa, res_rnc.sequen AS sequen, ';
        qry = qry +   'res_rnc.classif AS classif, res_rnc.qtde AS qtde, ';
        qry = qry +   'res_rnc.perc AS perc ';
        qry = qry + 'FROM res_rnc ';
        qry = qry + 'WHERE res_rnc.cdempresa = "' + cdempresa + '"';

        const res_rnc = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(res_rnc);
    }

};