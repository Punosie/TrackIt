const incomeSchema = require('../models/incomeModel');

exports.addIncome = async (req, res) => {
    const {title, amount, date, category, description} = req.body;

    const income = new incomeSchema({
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
        if (amount < 0 || typeof amount !== 'number') {
            return res.status(400).json({error: 'Amount must be a positive number'});
        }

        await income.save();
        res.status(201).json({message: 'Income added successfully'});        
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }

    console.log(income);
};


exports.getIncome = async (req, res) => {
    try {
        const incomes = await incomeSchema.find().sort({createdAt: -1});
        res.status(200).json({incomes});
    } catch (error) {
        res.status(500).json({error: 'Server error'});
    }
}

exports.deleteIncome = async (req, res) => {
    const { id } = req.params;

    try {
        const income = await incomeSchema.findByIdAndDelete(id);
        if (!income) {
            return res.status(404).json({ error: 'Income record not found' });
        }
        res.status(200).json({ message: 'Income deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};
