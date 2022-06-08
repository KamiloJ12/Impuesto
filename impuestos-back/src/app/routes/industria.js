const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const industriaController = require('../controller/industriaController');

router.get('', auth.verifyAdministrador, industriaController.list);
router.post('/add', auth.verifyAdministrador, industriaController.add);
router.get('/:id', auth.verifyAdministrador, industriaController.queryId);
router.put('/update', auth.verifyAdministrador, industriaController.update);

module.exports = router;