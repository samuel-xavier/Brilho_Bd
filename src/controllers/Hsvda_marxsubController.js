const Sequelize = require('sequelize');
const connection = require('../database');

const Hsvda_marxsub = require('../models/Hsvda_marxsub');

module.exports = {
    async index(req, res) {
        const hsvda_marxsub = await Hsvda_marxsub.findAll();

        return res.json(hsvda_marxsub);
    },

    async index_one(req, res) { 

        const { cdempresa, marca } = req.params;

        var qry = '';
        qry = qry + 'SELECT hsvda_marxsub.id AS id, hsvda_marxsub.cdempresa AS cdempresa, hsvda_marxsub.marca AS marca,  ';
        qry = qry +   'hsvda_marxsub.subgru AS subgru, hsvda_marxsub.fattot AS fattot, hsvda_marxsub.fatp13 AS fatp13, ';
        qry = qry +   'hsvda_marxsub.fatp12 AS fatp12, hsvda_marxsub.fatp11 AS fatp11, hsvda_marxsub.fatp10 AS fatp10, ';
        qry = qry +   'hsvda_marxsub.fatp09 AS fatp09, hsvda_marxsub.fatp08 AS fatp08, hsvda_marxsub.fatp07 AS fatp07, ';
        qry = qry +   'hsvda_marxsub.fatp06 AS fatp06, hsvda_marxsub.fatp05 AS fatp05, hsvda_marxsub.fatp04 AS fatp04, ';
        qry = qry +   'hsvda_marxsub.fatp03 AS fatp03, hsvda_marxsub.fatp02 AS fatp02, hsvda_marxsub.fatp01 AS fatp01 ';
        qry = qry + 'FROM hsvda_marxsub ';
        qry = qry + 'WHERE hsvda_marxsub.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND hsvda_marxsub.marca = "' + marca + '" ';
        qry = qry + 'ORDER BY hsvda_marxsub.cdempresa, hsvda_marxsub.marca, hsvda_marxsub.fattot DESC';

        const hsvda_marxsub = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(hsvda_marxsub);
    }

};