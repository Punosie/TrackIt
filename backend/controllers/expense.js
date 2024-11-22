const expenseSchema = require('../models/expenseModel');

exports.addExpense = async (req, res) => {
    const {title, amount, date, category, description} = req.body;

    const expense = new expenseSchema({
        title,
        amount,
        date,
        category,
        description
    });

    try {
        // validate
        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({error: 'All fields are required'});
        }
        if (amount < 0 || isNaN(amount)) {
            return res.status(400).json({error: 'Amount must be a positive number'});
        }

        await expense.save();
        res.status(201).json({message: 'Expense added successfully'});        
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }

    console.log(expense);
};


exports.getExpense = async (req, res) => {
    try {
        const expenses = await expenseSchema.find().sort({createdAt: -1});
        res.status(200).json({expenses});
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }
}

exports.deleteExpense = async (req, res) => {
    const { id } = req.params;

    try {
        const expense = await expenseSchema.findByIdAndDelete(id);
        if (!expense) {
            return res.status(404).json({ error: 'Expense record not found' });
        }
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
