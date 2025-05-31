const Sequelize = require('sequelize');
const connection = require('../database');

const Hsvda_marcas = require('../models/Hsvda_marcas');

module.exports = {
    async index(req, res) {
        const hsvda_marcas = await Hsvda_marcas.findAll();

        return res.json(hsvda_marcas);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT hsvda_marcas.id AS id, hsvda_marcas.cdempresa AS cdempresa, hsvda_marcas.marca AS marca,  ';
        qry = qry +   'hsvda_marcas.fattot AS fattot, hsvda_marcas.fatp13 AS fatp13, ';
        qry = qry +   'hsvda_marcas.fatp12 AS fatp12, hsvda_marcas.fatp11 AS fatp11, hsvda_marcas.fatp10 AS fatp10, ';
        qry = qry +   'hsvda_marcas.fatp09 AS fatp09, hsvda_marcas.fatp08 AS fatp08, hsvda_marcas.fatp07 AS fatp07, ';
        qry = qry +   'hsvda_marcas.fatp06 AS fatp06, hsvda_marcas.fatp05 AS fatp05, hsvda_marcas.fatp04 AS fatp04, ';
        qry = qry +   'hsvda_marcas.fatp03 AS fatp03, hsvda_marcas.fatp02 AS fatp02, hsvda_marcas.fatp01 AS fatp01 ';
        qry = qry + 'FROM hsvda_marcas ';
        qry = qry + 'WHERE hsvda_marcas.cdempresa = "' + cdempresa + '" ';
        qry = qry + 'ORDER BY hsvda_marcas.cdempresa, hsvda_marcas.fattot DESC';

        const hsvda_marcas = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(hsvda_marcas);
    }

};