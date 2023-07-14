const mongoose = require('mongoose')
const moment = require('moment');

const SpendingItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    amount: {
        type: Number,
        requried: true
    },
    spendingDate: {
        type: String,
        default: moment().format('DD-MM-YYYY')
    }
})

SpendingItemSchema.pre('save', function (next) {
    if (this.isModified('spendingDate')) {
      // Extract the date portion without the time
      const dateWithoutTime = moment(this.spendingDate, 'DD-MM-YYYY').format('DD-MM-YYYY');
      this.spendingDate = dateWithoutTime;
    }
    next();
  });

module.exports = mongoose.model("SpendingItems", SpendingItemSchema)