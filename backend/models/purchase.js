const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const PurchaseSchema = new Schema({
    wholesaler_id: {
        type:Schema.Types.ObjectId,
        ref:'wholesaler',
        required: [true, 'Wholesaler ID is required']
    },
    date: {
        type: Date,
        required: [true, 'Date is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    cheque_no: {
        type: String
    },
    cheque_date: {
        type: Date
    },
    payement_mode: {
        type: String,
        required: [true, 'Payement mode is required']
    }
});

const Purchase = mongoose.model('purchase',PurchaseSchema);

module.exports = Purchase;