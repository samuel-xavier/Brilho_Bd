const Sequelize = require('sequelize');
const connection = require('../database');

const Res_pedfutur = require('../models/Res_pedfutur');

module.exports = {
    async index(req, res) {
        const res_pedfutur = await Res_pedfutur.findAll();

        return res.json(res_pedfutur);
    },

    async index_one(req, res) { 

        const { cdempresa } = req.params;

        var qry = '';
        qry = qry + 'SELECT res_pedfutur.id AS id, res_pedfutur.cdempresa AS cdempresa, ';
        qry = qry +   'res_pedfutur.anomes AS anomes, res_pedfutur.valor AS valor ';
        qry = qry + 'FROM res_pedfutur ';
        qry = qry + 'WHERE res_pedfutur.cdempresa = "' + cdempresa + '"';
        
        const res_pedfutur = await connection.query( qry,
            { type: Sequelize.QueryTypes.SELECT }
            );

        return res.json(res_pedfutur);
    }

};