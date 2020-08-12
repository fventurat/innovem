const { Router } = require('express');
const router = Router();

const { renderIndicator } = require('../controllers/calendar.controller')

router.get('/calendar/indicators', renderIndicator);

module.exports = router;
