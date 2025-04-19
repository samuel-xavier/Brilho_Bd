const Sequelize = require('sequelize');
const connection = require('../database');

const Res_vdas = require('../models/Res_vdas');

module.exports = {
    async index(req, res) {
        const res_vdas = await Res_vdas.findAll();

        return res.json(res_vdas);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT res_vdas.id AS id, res_vdas.cdempresa AS cdempresa, res_vdas.meta_mes AS meta_mes,  ';
        qry = qry +   'res_vdas.fatacu AS fatacu, res_vdas.devacu AS devacu, res_vdas.efi_fatu AS efi_fatu, ';
        qry = qry +   'res_vdas.pend_prod AS pend_prod, res_vdas.pend_mes AS pend_mes, ';
        qry = qry +   'res_vdas.pend_fut AS pend_fut, res_vdas.efi_presu AS efi_presu, ';
        qry = qry +   'res_vdas.dthr_atu AS dthr_atu ';
        qry = qry + 'FROM res_vdas ';
        qry = qry + 'WHERE res_vdas.cdempresa = "' + cdempresa + '"';

        const res_vdas = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(res_vdas);
    }

};