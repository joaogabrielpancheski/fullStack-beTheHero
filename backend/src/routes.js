const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({
    evento: 'Semana OmniStack 11.0',
    aluno: 'João Gabriel Pancheski'
  })
});

module.exports = routes;