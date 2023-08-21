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
            // let date = new Date().toLocaleDateString();
            // let hours = new Date().getHours();
            // let minutes = new Date().getMinutes();
            // return `${date}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        }
    }
});

module.exports = mongoose.model('Flight', flightSchema);