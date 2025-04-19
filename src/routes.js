const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');
const Res_vdasController = require('./controllers/Res_vdasController');
const Res_pedidosController = require('./controllers/Res_pedidosController');
const Efi_producaoController = require('./controllers/Efi_producaoController');
const Res_entregasController = require('./controllers/Res_entregasController');
const Res_rncController = require('./controllers/Res_rncController');
const Fatur_devolController = require('./controllers/Fatur_devolController');
const Ped_pendController = require('./controllers/Ped_pendController');
const Detalh_entregasController = require('./controllers/Detalh_entregasController');
const RncController = require('./controllers/RncController');

const routes = express.Router();

routes.get('/usuario', UsuarioController.index);
routes.get('/usuario/:cdempresa/:email', UsuarioController.index_one);
routes.post('/usuario', UsuarioController.store);
routes.delete('/usuario/:usuario_id', UsuarioController.delete);
routes.put('/usuario/:usuario_id', UsuarioController.update);

routes.get('/res_vdas', Res_vdasController.index);
routes.get('/res_vdas/:cdempresa', Res_vdasController.index_one);

routes.get('/res_pedidos', Res_pedidosController.index);
routes.get('/res_pedidos/:cdempresa', Res_pedidosController.index_one);

routes.get('/efi_producao', Efi_producaoController.index);
routes.get('/efi_producao/:cdempresa', Efi_producaoController.index_one);

routes.get('/res_entregas', Res_entregasController.index);
routes.get('/res_entregas/:cdempresa', Res_entregasController.index_one);

routes.get('/res_rnc', Res_rncController.index);
routes.get('/res_rnc/:cdempresa', Res_rncController.index_one);

routes.get('/fatur_devol', Fatur_devolController.index);
routes.get('/fatur_devol/:cdempresa', Fatur_devolController.index_one);
routes.get('/fatur_devol/:cdempresa/:classif', Fatur_devolController.index_classif);

routes.get('/ped_pend', Ped_pendController.index);
routes.get('/ped_pend/classif/:cdempresa/:classif', Ped_pendController.index_classif);
routes.get('/ped_pend/status/:cdempresa/:status', Ped_pendController.index_status);

routes.get('/detalh_entregas', Detalh_entregasController.index);
routes.get('/detalh_entregas/:cdempresa/:classif', Detalh_entregasController.index_one);

routes.get('/rnc', RncController.index);
routes.get('/rnc/:cdempresa/:classif', RncController.index_one);

//routes.get('/empresa', EmpresaController.index);
//routes.get('/empresa/:cdempresa', EmpresaController.index_one);
//routes.post('/empresa', EmpresaController.store);
//routes.delete('/empresa/:empresa_id', EmpresaController.delete);
//routes.put('/empresa/:empresa_id', EmpresaController.update);

//routes.get('/itens', ItemController.index);
//routes.get('/itens/:cdempresa', ItemController.index_empresa);
//routes.get('/itens/:cdempresa/:cdgrpitem', ItemController.index_grp);
//routes.post('/itens', ItemController.store);
//routes.delete('/itens/:item_id', ItemController.delete);
//routes.put('/itens/:item_id', ItemController.update);

//routes.get('/grpitens', GrpitemController.index);
//routes.get('/grpitens/:cdempresa', GrpitemController.index_empresa);
//routes.post('/grpitens', GrpitemController.store);
//routes.delete('/grpitens/:grpitem_id', GrpitemController.delete);
//routes.put('/grpitens/:grpitem_id', GrpitemController.update);

//routes.get('/analise_vdas', Analise_vdasController.index);
//routes.get('/analise_vdas/:cdempresa/:tp_analise/:ds_regiao', Analise_vdasController.index_reg);
//routes.get('/analise_vdas/:cdempresa/:tp_analise', Analise_vdasController.index_tpanalise);
//routes.post('/analise_vdas', Analise_vdasController.store);
//routes.delete('/analise_vdas/:analise_vdas_id', Analise_vdasController.delete);
//routes.put('/analise_vdas/:analise_vdas_id', Analise_vdasController.update);

//routes.get('/analise_pedpend', Analise_pedpendController.index);
//routes.get('/analise_pedpend/:cdempresa/:tp_analise/:ds_regiao', Analise_pedpendController.index_reg);
//routes.get('/analise_pedpend/:cdempresa/:tp_analise', Analise_pedpendController.index_tpanalise);
//routes.post('/analise_pedpend', Analise_pedpendController.store);
//routes.delete('/analise_pedpend/:analise_pedpend_id', Analise_pedpendController.delete);
//routes.put('/analise_pedpend/:analise_pedpend_id', Analise_pedpendController.update);

//routes.get('/tp_analises', Tp_analisesController.index);
//routes.get('/tp_analises/:cdempresa', Tp_analisesController.index_empresa);
//routes.get('/tp_analises/:cdempresa/:perfil', Tp_analisesController.index_perfil);
//routes.post('/tp_analises', Tp_analisesController.store);
//routes.delete('/tp_analises/:tp_analise_id', Tp_analisesController.delete);
//routes.put('/tp_analises/:tp_analise_id', Tp_analisesController.update);

//routes.get('/analise_clientes', Analise_clientesController.index);
//routes.get('/analise_clientes/:cdempresa/:tp_analise/:ds_regiao', Analise_clientesController.index_reg);
//routes.get('/analise_clientes/:cdempresa/:tp_analise', Analise_clientesController.index_tpanalise);
//routes.post('/analise_clientes', Analise_clientesController.store);
//routes.delete('/analise_clientes/:analise_clientes_id', Analise_clientesController.delete);
//routes.put('/analise_clientes/:analise_clientes_id', Analise_clientesController.update);

//routes.get('/vdas_detalhe', Vdas_detalheController.index);
//routes.get('/vdas_detalhe/:cdempresa/:tp_analise/:ds_regiao', Vdas_detalheController.index_reg);
//routes.get('/vdas_detalhe/:cdempresa/:tp_analise', Vdas_detalheController.index_tpanalise);
//routes.post('/vdas_detalhe', Vdas_detalheController.store);
//routes.delete('/vdas_detalhe/:vdas_detalhe_id', Vdas_detalheController.delete);
//routes.put('/vdas_detalhe/:vdas_detalhe_id', Vdas_detalheController.update);

//routes.get('/hist_faturamento', Hist_faturamentoController.index);
//routes.get('/hist_faturamento/:cdempresa/:tp_analise/:ds_regiao/:tp_consulta', Hist_faturamentoController.index_clientes_ou_cidades_regiao);
//routes.get('/hist_faturamento/:cdempresa/:tp_analise/:ds_regiao/:tp_consulta/:chave01', Hist_faturamentoController.index_clientes_05);
//routes.post('/hist_faturamento', Hist_faturamentoController.store);
//routes.delete('/hist_faturamento/:hist_faturamento_id', Hist_faturamentoController.delete);
//routes.put('/hist_faturamento/:hist_faturamento_id', Hist_faturamentoController.update);

//routes.get('/perform_repr', Perform_reprController.index);
//routes.get('/perform_repr/:cdempresa/:tp_analise/:ds_regiao', Perform_reprController.index_regiao);
//routes.post('/perform_repr', Perform_reprController.store);
//routes.delete('/perform_repr/:perform_repr_id', Perform_reprController.delete);
//routes.put('/perform_repr/:perform_repr_id', Perform_reprController.update);

module.exports = routes;