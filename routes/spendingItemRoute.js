const {
    getAllSpendingItems,
    deleteSpendingItem,
    createSpendingItem
} = require('../controller/SpendingItemController')

const router = require('express').Router()

router.post('/spendingItem/new', createSpendingItem)

module.exports = router