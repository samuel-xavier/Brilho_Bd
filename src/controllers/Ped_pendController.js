const Sequelize = require('sequelize');
const connection = require('../database');

const Ped_pend = require('../models/Ped_pend');

module.exports = {
    async index(req, res) {
        const ped_pend = await Ped_pend.findAll();

        return res.json(ped_pend);
    },

    async index_classif(req, res) { 

        const { cdempresa, classif } = req.params;

        var qry = '';
        qry = qry + 'SELECT ped_pend.id AS id, ped_pend.cdempresa AS cdempresa, ';
        qry = qry +   'ped_pend.classif AS classif, ped_pend.tippend AS tippend, ';
        qry = qry +   'ped_pend.nroped AS nroped, ped_pend.dscliente AS dscliente, ';
        qry = qry +   'ped_pend.dtemis AS dtemis, ped_pend.progrprodu AS progrprodu, ';
        qry = qry +   'ped_pend.mesprogr AS mesprogr, ped_pend.diaspend AS diaspend, ';
        qry = qry +   'ped_pend.dtexped AS dtexped, ped_pend.valor AS valor ';
        qry = qry + 'FROM ped_pend ';
        qry = qry + 'WHERE ped_pend.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND ped_pend.classif = "' + classif + '" ';
        qry = qry + 'ORDER BY ped_pend.dtemis, ped_pend.dscliente';

        const ped_pend = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(ped_pend);
    },

    async index_status(req, res) { 

        const { cdempresa, status } = req.params;

        var qry = '';
        qry = qry + 'SELECT ped_pend.id AS id, ped_pend.cdempresa AS cdempresa, ';
        qry = qry +   'ped_pend.classif AS classif, ped_pend.tippend AS tippend, ';
        qry = qry +   'ped_pend.nroped AS nroped, ped_pend.dscliente AS dscliente, ';
        qry = qry +   'ped_pend.dtemis AS dtemis, ped_pend.progrprodu AS progrprodu, ';
        qry = qry +   'ped_pend.mesprogr AS mesprogr, ped_pend.diaspend AS diaspend, ';
        qry = qry +   'ped_pend.dtexped AS dtexped, ped_pend.valor AS valor ';
        qry = qry + 'FROM ped_pend ';
        qry = qry + 'WHERE ped_pend.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND ped_pend.tippend = "' + status + '" ';
        qry = qry + 'ORDER BY ped_pend.dtemis, ped_pend.dscliente';

        console.log(qry);

        const ped_pend = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(ped_pend);
    },

async index_statusxperiodo(req, res) { 

        const { cdempresa, status, periodo } = req.params;

        var qry = '';
        qry = qry + 'SELECT ped_pend.id AS id, ped_pend.cdempresa AS cdempresa, ';
        qry = qry +   'ped_pend.classif AS classif, ped_pend.tippend AS tippend, ';
        qry = qry +   'ped_pend.nroped AS nroped, ped_pend.dscliente AS dscliente, ';
        qry = qry +   'ped_pend.dtemis AS dtemis, ped_pend.progrprodu AS progrprodu, ';
        qry = qry +   'ped_pend.mesprogr AS mesprogr, ped_pend.diaspend AS diaspend, ';
        qry = qry +   'ped_pend.dtexped AS dtexped, ped_pend.valor AS valor ';
        qry = qry + 'FROM ped_pend ';
        qry = qry + 'WHERE ped_pend.cdempresa = "' + cdempresa + '" ';
        qry = qry + '  AND ped_pend.tippend = "' + status + '" ';
        qry = qry + '  AND ped_pend.mesprogr = "' + periodo + '" ';
        qry = qry + 'ORDER BY ped_pend.dtemis, ped_pend.dscliente';

        console.log(qry);

        const ped_pend = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(ped_pend);
    }

};