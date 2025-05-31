const Sequelize = require('sequelize');
const connection = require('../database');

const Hsvda_periodo = require('../models/Hsvda_periodo');

module.exports = {
    async index(req, res) {
        const hsvda_periodo = await Hsvda_periodo.findAll();

        return res.json(hsvda_periodo);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT hsvda_periodo.id AS id, hsvda_periodo.cdempresa AS cdempresa, hsvda_periodo.per13 AS per13,  ';
        qry = qry +   'hsvda_periodo.per12 AS per12, hsvda_periodo.per11 AS per11, hsvda_periodo.per10 AS per10, ';
        qry = qry +   'hsvda_periodo.per09 AS per09, hsvda_periodo.per08 AS per08, hsvda_periodo.per07 AS per07, ';
        qry = qry +   'hsvda_periodo.per06 AS per06, hsvda_periodo.per05 AS per05, hsvda_periodo.per04 AS per04, ';
        qry = qry +   'hsvda_periodo.per03 AS per03, hsvda_periodo.per02 AS per02, hsvda_periodo.per01 AS per01 ';
        qry = qry + 'FROM hsvda_periodo ';
        qry = qry + 'WHERE hsvda_periodo.cdempresa = "' + cdempresa + '"';

        const hsvda_periodo = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(hsvda_periodo);
    }

};