const Sequelize = require('sequelize');
const connection = require('../database');

const Rnc = require('../models/Rnc');

module.exports = {
    async index(req, res) {
        const rnc = await Rnc.findAll();

        return res.json(rnc);
    },

    async index_one(req, res) { 

        const { cdempresa, classif } = req.params;

        var qry = '';
        qry = qry + 'SELECT rnc.id AS id, rnc.cdempresa AS cdempresa, rnc.classif AS classif, ';
        qry = qry +   'rnc.dtemis AS dtemis, rnc.dscliente AS dscliente, ';
        qry = qry +   'rnc.produto AS produto, rnc.dsproblema AS dsproblema ';
        qry = qry + 'FROM rnc ';
        qry = qry + 'WHERE rnc.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND rnc.classif = "' + classif + '"';

        const rnc = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(rnc);
    }

};