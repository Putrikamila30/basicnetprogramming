const express = require('express');
const router = express.Router();
const userController = require('./controller/usercontroller');

// Rute untuk mendapatkan semua catatan
router.get('/ami', userController.getAllDatas);

// Rute untuk mendapatkan catatan berdasarkan ID
router.get('/ami/:id', userController.getDataById);

// Rute untuk menambahkan catatan baru
router.post('/ami', userController.addData);

// Rute untuk memperbarui catatan
router.put('/ami/:id', userController.updateData);

// Rute untuk menghapus catatan
router.delete('/ami/:id', userController.deleteData);

module.exports = router;
