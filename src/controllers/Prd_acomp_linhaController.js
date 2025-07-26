const Sequelize = require('sequelize');
const connection = require('../database');

const Prd_acomp_linha = require('../models/Prd_acomp_linha');

module.exports = {
    async index(req, res) {
        const prd_acomp_linha = await Prd_acomp_linha.findAll();

        return res.json(prd_acomp_linha);
    },

    async index_one(req, res) { 

        const { cdempresa, setor } = req.params;

        var qry = '';
        qry = qry + 'SELECT prd_acomp_linha.id AS id, prd_acomp_linha.cdempresa AS cdempresa, ';
        qry = qry +   'prd_acomp_linha.ds_setor AS ds_setor, prd_acomp_linha.ds_linha AS ds_linha, ';
        qry = qry +   'prd_acomp_linha.qt_prog AS qt_prog, prd_acomp_linha.qt_produz AS qt_produz, ';
        qry = qry +   'prd_acomp_linha.qt_pend AS qt_pend, prd_acomp_linha.qt_dias AS qt_dias, ';
        qry = qry +   'prd_acomp_linha.qt_proddia AS proddia ';
        qry = qry + 'FROM prd_acomp_linha ';
        qry = qry + 'WHERE prd_acomp_linha.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND prd_acomp_linha.ds_setor = "' + setor + '" ';

        const prd_acomp_linha = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(prd_acomp_linha);
    }

};