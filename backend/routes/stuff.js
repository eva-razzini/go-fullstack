const express = require('express');
const auth = require('auth');
const router = express.Router();

const stuffCrl = require ('../controllers/stuff');

router.get('/', auth, stuffCrl.getAllThings);
router.post('/', auth, stuffCrl.creatThing);
router.get('/:id', auth, stuffCrl.getOneThing);
router.put('/:id', auth, stuffCrl.modifyThing);
router.delete('/:id', auth, stuffCrl.deleteThing);

module.exports = router;