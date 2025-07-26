const Sequelize = require('sequelize');
const connection = require('../database');

const Prd_acomp_progs = require('../models/Prd_acomp_progs');

module.exports = {
    async index(req, res) {
        const prd_acomp_progs = await Prd_acomp_progs.findAll();

        return res.json(prd_acomp_progs);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT prd_acomp_progs.id AS id, prd_acomp_progs.cdempresa AS cdempresa, ';
        qry = qry +   'prd_acomp_progs.cd_prog AS cd_prog, prd_acomp_progs.ds_prog AS ds_prog ';
        qry = qry + 'FROM prd_acomp_progs ';
        qry = qry + 'WHERE prd_acomp_progs.cdempresa = "' + cdempresa + '"';

        const prd_acomp_progs = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(prd_acomp_progs);
    }

};