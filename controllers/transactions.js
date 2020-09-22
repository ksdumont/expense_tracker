const Transaction = require('../models/Transaction');
// Get all transactions
// GET /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.send(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// Add transactions
// POST /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
  res.send('POST transaction');
};

// Delete transactions
// DELETE /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
  res.send('DELETE transaction');
};
