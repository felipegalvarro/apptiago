const axios = require('axios');
const db = require('../models');  
const Endereco = db.Endereco;    

const cepRegex = /^[0-9]{5}-?[0-9]{3}$/;

exports.consultaESalvaEndereco = async (req, res) => {
    const cep = req.params.cep;

    if (!cepRegex.test(cep)) {
        return res.status(400).send('CEP inválido');
    }

    try {
        const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const { logradouro, bairro, localidade, uf } = response.data;

        const enderecoExistente = await Endereco.findOne({ where: { cep } });
        if (enderecoExistente) {
            return res.json(enderecoExistente);
        }

        const endereco = await Endereco.create({
            cep,
            logradouro,
            bairro,
            localidade,
            uf
        });

        res.json(endereco);
    } catch (error) {
        console.error('Erro ao fazer requisição ou salvar:', error);
        res.status(500).send('Erro ao consultar o CEP e salvar no banco');
    }
};
