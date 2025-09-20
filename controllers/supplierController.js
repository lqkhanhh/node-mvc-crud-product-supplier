const Supplier = require('../models/Supplier');

exports.index = async (req, res) => {
  const suppliers = await Supplier.find();
  res.render('suppliers/index', { suppliers });
};

exports.create = (req, res) => {
  res.render('suppliers/create');
};

exports.store = async (req, res) => {
  await Supplier.create(req.body);
  res.redirect('/suppliers');
};

exports.edit = async (req, res) => {
  const supplier = await Supplier.findById(req.params.id);
  res.render('suppliers/edit', { supplier });
};

exports.update = async (req, res) => {
  await Supplier.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/suppliers');
};

exports.destroy = async (req, res) => {
  await Supplier.findByIdAndDelete(req.params.id);
  res.redirect('/suppliers');
};
