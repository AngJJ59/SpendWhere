const {
    updateSpendingItemInfo,
    getSpendingItem,
    getAllSpendingItems,
    deleteSpendingItem,
    createSpendingItem
} = require('../controller/SpendingItemController')

const router = require('express').Router()

router.post('/spendingItem/new', createSpendingItem)
router.get('/allItems', getAllSpendingItems)
router.delete('/spendingItem/delete/:uniqueIdentifier', deleteSpendingItem)
router.get('/spendingItem/getSpendingItem/:uniqueIdentifier', getSpendingItem)
router.put('/spendingItem/update/:uniqueIdentifier', updateSpendingItemInfo)

module.exports = router