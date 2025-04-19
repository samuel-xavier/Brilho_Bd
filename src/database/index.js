const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Res_vdas = require('../models/Res_vdas');
const Res_pedidos = require('../models/Res_pedidos');
const Efi_producao = require('../models/Efi_producao');
const Res_entregas = require('../models/Res_entregas');
const Res_rnc = require('../models/Res_rnc');
const Fatur_devol = require('../models/Fatur_devol');
const Ped_pend = require('../models/Ped_pend');
const Detalh_entregas = require('../models/Detalh_entregas');
const Rnc = require('../models/Rnc');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Res_vdas.init(connection);
Res_pedidos.init(connection);
Efi_producao.init(connection);
Res_entregas.init(connection);
Res_rnc.init(connection);
Fatur_devol.init(connection);
Ped_pend.init(connection);
Detalh_entregas.init(connection);
Rnc.init(connection);

module.exports = connection;