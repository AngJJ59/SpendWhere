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

module.exports.getAllSpendingItems = async (_req, res) => {
    const spendingItems = await SpendingItem.find()

    res.json(spendingItems)
}

module.exports.deleteSpendingItem = async (req, res) => {
    const deleteItem = await SpendingItem.findByIdAndDelete(req.params.uniqueIdentifier)

    res.json(deleteItem)
}

module.exports.getSpendingItem = async (req, res) => {
    const spendingItem = await SpendingItem.findById(req.params.uniqueIdentifier)

    res.json(spendingItem)
}

module.exports.updateSpendingItemInfo = async (req, res) => {
    try {
        updatedData = req.body

        itemToUpdate = await SpendingItem.findByIdAndUpdate(
            req.params.uniqueIdentifier, 
            updatedData, {
                new: true
            }
        )

        if (!itemToUpdate) {
            return res.status(404).json({ error: 'Spending item not found' });
          }
      
          return res.status(200).json({ message: 'Spending item updated successfully', item: itemToUpdate });

    } catch(err) {
        console.log(err.message)
        return res.status(500).json({ error: 'Internal server error' });
    }
}
