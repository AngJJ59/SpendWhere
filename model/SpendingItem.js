const mongoose = require('mongoose')

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
        type: Date,
        default: Date.now().toString().slice(0,10)
    }
})

module.exports = mongoose.model("SpendingItems", SpendingItemSchema)