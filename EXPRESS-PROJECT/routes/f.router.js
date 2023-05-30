const express = require('express')

const f_controller = require('../controllers/f.controller')

const f_r = express.Router()

f_r.use((req, res, next) => {
    console.log('ip_address ',req.ip);
})

f_r.get('/',f_controller.g_f )
f_r.post('/',f_controller.p_f)


f_r.get('/:fId',f_controller.g_f_1)

module.exports = f_r;