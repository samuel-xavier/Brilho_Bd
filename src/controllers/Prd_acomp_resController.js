const Sequelize = require('sequelize');
const connection = require('../database');

const Prd_acomp_res = require('../models/Prd_acomp_res');

module.exports = {
    async index(req, res) {
        const prd_acomp_res = await Prd_acomp_res.findAll();

        return res.json(prd_acomp_res);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT prd_acomp_res.id AS id, prd_acomp_res.cdempresa AS cdempresa, ';
        qry = qry +   'prd_acomp_res.ds_acomp AS ds_acomp, prd_acomp_res.ultdiprod AS ultdiprod, ';
        qry = qry +   'prd_acomp_res.ultdiacab AS ultdiacab, prd_acomp_res.ultdiemba AS ultdiemba ';
        qry = qry + 'FROM prd_acomp_res ';
        qry = qry + 'WHERE prd_acomp_res.cdempresa = "' + cdempresa + '"';

        const prd_acomp_res = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(prd_acomp_res);
    }

};