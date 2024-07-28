const mongoose = require("mongoose");

const loanSchema = new mongoose.Schema({
  loanAmount: {
    type: Number,
    required: true,
  },
  interestRate: {
    type: Number,
    required: true,
  },
  loanTerm: {
    type: Number,
    required: true,
  },
  borrower: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model if you have one
    required: true,
  },
  applicationDate: {
    type: String,
    required: true,
  },
  approvalDate: String,
  disbursementDate: String,
  repaymentStartDate: String,
  repaymentFrequency: {
    type: String, // You can customize the type to your needs
  },
  status: {
    type: String,
    enum: ["pending", "approved", "disbursed", "in-repayment", "closed"],
    default: "pending",
  },
  collateral: String, // You can customize this based on your requirements
  guarantor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model if you have one
  },
  remainingBalance: {
    type: Number,
    default: 0,
  },
  latePayments: [String], // An array of dates for late payments
  notes: String,
});

const Loan = mongoose.model("loan", loanSchema);

module.exports = Loan;
