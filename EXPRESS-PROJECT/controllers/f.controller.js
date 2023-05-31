const model = require('../models/friends.model');

function p_f(req, res) {
  if (!req.body.name) {
    res.status(400).json({
      error: 'Missing Friend name',
    });
  } else {
    const n_f = {
      name: req.body.name,
      id: model.length,
    };
    model.push(n_f);
    res.json(n_f);
  }
}

function g_f(req, res) {
  res.json(model);
}

function g_f_1(req, res) {
  const fId = Number(req.params.fId);
  const f_1 = model[fId];
  if (f_1) {
    res.status(200).json(f_1);
  } else {
    res.status(404).send('Friend not found');
  }
}

module.exports = {
  p_f,
  g_f,
  g_f_1,
};
