const Flight = require('../models/flight');

module.exports = {
    new: newTicket
};

function newTicket(req, res) {
    const flightId = req.params.id;
    res.render('tickets/new', { flightId, title: 'Create a New Ticket' });
}