const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Usuario = require('../models/Usuario');
const Res_vdas = require('../models/Res_vdas');
const Res_pedidos = require('../models/Res_pedidos');
const Res_pedfutur = require('../models/Res_pedfutur');
const Efi_producao = require('../models/Efi_producao');
const Res_entregas = require('../models/Res_entregas');
const Res_rnc = require('../models/Res_rnc');
const Fatur_devol = require('../models/Fatur_devol');
const Ped_pend = require('../models/Ped_pend');
const Detalh_entregas = require('../models/Detalh_entregas');
const Rnc = require('../models/Rnc');
const Hsvda_marcas = require('../models/Hsvda_marcas');
const Hsvda_marxmes = require('../models/Hsvda_marxmes');
const Hsvda_marxsub = require('../models/Hsvda_marxsub');
const Hsvda_periodo = require('../models/Hsvda_periodo');
const Prd_acomp_res = require('../models/Prd_acomp_res');
const Prd_acomp_progs = require('../models/Prd_acomp_progs');
const Prd_acomp_linha = require('../models/Prd_acomp_linha');

const connection = new Sequelize(dbConfig);

Usuario.init(connection);
Res_vdas.init(connection);
Res_pedidos.init(connection);
Res_pedfutur.init(connection);
Efi_producao.init(connection);
Res_entregas.init(connection);
Res_rnc.init(connection);
Fatur_devol.init(connection);
Ped_pend.init(connection);
Detalh_entregas.init(connection);
Rnc.init(connection);
Hsvda_marcas.init(connection);
Hsvda_marxmes.init(connection);
Hsvda_marxsub.init(connection);
Hsvda_periodo.init(connection);
Prd_acomp_res.init(connection);
Prd_acomp_progs.init(connection);
Prd_acomp_linha.init(connection);

module.exports = connection;