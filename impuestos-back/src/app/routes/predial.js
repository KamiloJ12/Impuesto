const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const predialController = require('../controller/predialController');

router.get('', auth.verifyAdministrador, predialController.list);
router.post('/add', auth.verifyAdministrador, predialController.add);
router.get('/:id', auth.verifyAdministrador, predialController.queryId);
router.put('/update', auth.verifyAdministrador, predialController.update);

module.exports = router;