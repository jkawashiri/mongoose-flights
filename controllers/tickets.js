const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
};

async function newTicket(req, res) {
    const flightId = req.params.id;
    const flight = await Flight.findById(flightId);
    res.render('tickets/new', { flight, title: 'Create a New Ticket' });
}

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    const ticket = new Ticket(req.body)
    ticket.flight = flight._id;
    try {
      await ticket.save();
    } catch (err) {
      console.log(err);
    }
    res.redirect(`/flights/${flight._id}`);
}

async function deleteTicket(req, res) {
    const flightId = req.params.flightId;
    const ticketId = req.params.ticketId;
    await Ticket.findByIdAndDelete(ticketId);
    res.redirect(`/flights/${flightId}`);
}