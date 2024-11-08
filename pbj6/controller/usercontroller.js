const db = require('../koneksi');

// Mendapatkan semua data
const getAllDatas = (req, res) => {
    const query = 'SELECT * FROM ami';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results);
    });
};

// Mendapatkan data berdasarkan ID
const getDataById = (req, res) => {
    const query = 'SELECT * FROM ami WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json(results[0]);
    });
};

//Menambahkan data baru
const addData = (req, res) => {
    const {ID, Nama, NIM, Prodi} = req.body;
    const query = 'INSERT INTO ami (ID, Nama, NIM, Prodi) VALUES (?, ?, ?, ?)';
    db.query(query, [ID, Nama, NIM, Prodi], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ ID, Nama, NIM, Prodi});
    });
};


// Memperbarui data
const updateData = (req, res) => {
    const {ID, Nama, NIM, Prodi} = req.body;
    const query = 'UPDATE ami SET ID = ?, Nama = ?, NIM = ?, Prodi = ? WHERE id = ?';
    db.query(query, [ID, Nama, NIM, Prodi, req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data updated successfully' });
    });
};

// Menghapus data
const deleteData = (req, res) => {
    const query = 'DELETE FROM ami WHERE id = ?';
    db.query(query, [req.params.id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Data deleted successfully' });
    });
};

module.exports = { getAllDatas, getDataById, addData, updateData, deleteData };
