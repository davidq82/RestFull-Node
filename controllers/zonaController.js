const Zona = require('../models/zonaModel');

exports.getZona = (req, res) => {
    Zona.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

exports.createZona = (req, res) => {
    const { nombre } = req.body;
    Zona.create(nombre, (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Zona creada correctamente', id: result.insertId });
    });
};

exports.updateZona = (req, res) => {
    const { id, nombre } = req.body; // extraer id y nombre del cuerpo
    Zona.update(id, nombre, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Zona actualizada correctamente' });
    });
};


exports.deleteZona = (req, res) => {
    const { id } = req.body; // extraer id del cuerpo de la solicitud
    Zona.delete(id, (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Zona borrada correctamente' });
    });
};


