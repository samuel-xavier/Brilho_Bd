const Sequelize = require('sequelize');
const connection = require('../database');

const Hsvda_marxmes = require('../models/Hsvda_marxmes');

module.exports = {
    async index(req, res) {
        const hsvda_marxmes = await Hsvda_marxmes.findAll();

        return res.json(hsvda_marxmes);
    },

    async index_one(req, res) { 

        const { cdempresa, marca } = req.params;

        var qry = '';
        qry = qry + 'SELECT hsvda_marxmes.id AS id, hsvda_marxmes.cdempresa AS cdempresa, hsvda_marxmes.marca AS marca,  ';
        qry = qry +   'hsvda_marxmes.anomes AS anomes, hsvda_marxmes.vlfat AS vlfat ';
        qry = qry + 'FROM hsvda_marxmes ';
        qry = qry + 'WHERE hsvda_marxmes.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND hsvda_marxmes.marca = "' + marca + '" ';
        qry = qry + 'ORDER BY hsvda_marxmes.cdempresa, hsvda_marxmes.marca, hsvda_marxmes.anomes';

        const hsvda_marxmes = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(hsvda_marxmes);
    }

};