const SpendingItem = require('../model/SpendingItem')

module.exports.createSpendingItem = (req, res) => {
    const spendingItem = new SpendingItem({
        title: req.body.title,
        description: req.body.description,
        amount: req.body.amount,
        spendingDate: req.body.spendingDate
    })

    spendingItem.save()

    res.json(spendingItem)
}