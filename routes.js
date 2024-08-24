const express = require('express');
const router = express.Router();
const EnderecoController = require('./controllers/EnderecoController');

router.get('/consulta-cep/:cep', EnderecoController.consultaESalvaEndereco);

module.exports = router;
