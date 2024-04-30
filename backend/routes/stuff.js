const express = require('express');
const router = express.Router();

const stuffCrl = require ('../controllers/stuff');

router.post('/', stuffCrl.creatThing);
router.put('/:id', stuffCrl.modifyThing);
router.delete('/:id', stuffCrl.deleteThing);
router.get('/:id', stuffCrl.getOneThing); 
router.get('/', stuffCrl.getAllThings);

module.exports = router;