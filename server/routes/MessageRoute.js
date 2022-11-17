const router = require('express').Router();

router.post('/');
router.get('/:userId',userChats);
router.get('/find/:firstId/:secondId',findChat);

module.exports = router;