const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
// POST /flights/:id/tickets
router.post('/flights/:id/tickets', ticketsCtrl.create);
// DELETE /flights/:flightId/tickets/:ticketId
router.delete('/flights/:flightId/tickets/:ticketId', ticketsCtrl.delete);

module.exports = router;