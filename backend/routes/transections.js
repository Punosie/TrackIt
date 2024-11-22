const router = require('express').Router();
const {addIncome, getIncome, deleteIncome} = require('../controllers/income');


router.post('/add-income', addIncome);
router.get('/get-income', getIncome);
router.delete('/delete-income/:id', deleteIncome);

module.exports = router;