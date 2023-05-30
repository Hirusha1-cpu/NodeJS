const express = require('express')
const m_controller = require('../controllers/messages.controller')

const m_r = express.Router();

m_r.get('/', m_controller.g_m );

m_r.post('/',m_controller.p_m );

module.exports = m_r;