const Sequelize = require('sequelize');
const connection = require('../database');

const Detalh_entregas = require('../models/Detalh_entregas');

module.exports = {
    async index(req, res) {
        const detalh_entregas = await Detalh_entregas.findAll();

        return res.json(detalh_entregas);
    },

    async index_one(req, res) { 

        const { cdempresa, classif } = req.params;

        var qry = '';
        qry = qry + 'SELECT detalh_entregas.id AS id, detalh_entregas.cdempresa AS cdempresa, detalh_entregas.classif AS classif, ';
        qry = qry +   'detalh_entregas.tipdoc AS tipdoc, detalh_entregas.nrodoc AS nrodoc, ';
        qry = qry +   'detalh_entregas.dscliente AS dscliente, detalh_entregas.dtemis AS dtemis, ';
        qry = qry +   'detalh_entregas.dtfatur AS dtfatur, detalh_entregas.vlrdoc AS vlrdoc, ';
        qry = qry +   'detalh_entregas.cid_dest AS cid_dest, detalh_entregas.prazo_pad AS prazo_pad, ';
        qry = qry +   'detalh_entregas.dtprev AS dtprev, detalh_entregas.diasatraso AS diasatraso ';
        qry = qry + 'FROM detalh_entregas ';
        qry = qry + 'WHERE detalh_entregas.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND detalh_entregas.classif = "' + classif + '" ';
        qry = qry + 'ORDER BY detalh_entregas.dtfatur, detalh_entregas.dscliente';

        const detalh_entregas = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(detalh_entregas);
    }

};