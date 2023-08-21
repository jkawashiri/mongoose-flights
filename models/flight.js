const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
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
    }
});

module.exports = mongoose.model('Flight', flightSchema);