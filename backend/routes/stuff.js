const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();

const stuffCrl = require ('../controllers/stuff');

router.post('/', auth, stuffCrl.creatThing);
router.put('/:id', auth, stuffCrl.modifyThing);
router.delete('/:id', auth, stuffCrl.deleteThing);
router.get('/:id', auth, stuffCrl.getOneThing); 
router.get('/', auth, stuffCrl.getAllThings);

module.exports = router;