const Sequelize = require('sequelize');
const connection = require('../database');

const Efi_producao = require('../models/Efi_producao');

module.exports = {
    async index(req, res) {
        const efi_producao = await Efi_producao.findAll();

        return res.json(efi_producao);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT efi_producao.id AS id, efi_producao.cdempresa AS cdempresa, efi_producao.sequen AS sequen, ';
        qry = qry +   'efi_producao.classif AS classif, efi_producao.qtde AS qtde, ';
        qry = qry +   'efi_producao.valor AS valor, efi_producao.perc AS perc ';
        qry = qry + 'FROM efi_producao ';
        qry = qry + 'WHERE efi_producao.cdempresa = "' + cdempresa + '"';

        const efi_producao = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(efi_producao);
    }

};