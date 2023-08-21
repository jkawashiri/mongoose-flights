const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'BUR', 'JFK']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'JetBlue', 'Hawaiian']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'BUR', 'JFK'],
        default: 'LAX'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function() {
            let date = new Date();
            let year = date.getFullYear();
            let nextYear = year + 1;
            let nextYearDate = new Date(date);
            nextYearDate.setFullYear(nextYear);
            return nextYearDate;
        }
    },
    destinations: {
        type: [destinationSchema]
    }
});

module.exports = mongoose.model('Flight', flightSchema);