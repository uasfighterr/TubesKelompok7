const express = require('express');
const router = express.Router();
const balitaController = require('../controllers/balita.controller');
const verifyToken = require('../middlewares/auth.middleware');
const limiter = require('../middlewares/rateLimiter');

router.use(verifyToken);   // Middleware autentikasi
router.use(limiter);       // Middleware rate limiting (throttling)

router.get('/ibu/:nik_ibu', balitaController.getBalitaByNikIbu);
router.get('/:id_balita', balitaController.getBalitaById);
router.post('/', balitaController.createBalita);
router.get('/', balitaController.getAllBalita);
router.put('/:id_balita', balitaController.updateBalita);
router.delete('/:id_balita', balitaController.deleteBalita);

module.exports = router;