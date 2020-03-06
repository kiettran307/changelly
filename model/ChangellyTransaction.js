'use strict';

const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const ChangellyTransaction = new Schema({
    from: { type: String },
    to: { type: String },
    address: { type: String}, //numDAI/10**18
    amount: { type: String},
    type:  { type: String }, //deposit or withdraw
    id: { type: String },
    email: { type: String},
    createdAt: { type: Date, index: 1},
    updatedAt: { type: Date, index: 1 },
    createdAtTs: { type: Number, index: 1},
    updatedAtTs: { type: Number, index: 1 },
});
ChangellyTransaction.pre('save', function(next) {
    const now = new Date();
    const tmp = Math.round(new Date().getTime() / 1000);
    if (!this.createdAt) {
        this.createdAt = now;
    }
    if (!this.createdAtTs) {
      this.createdAtTs = tmp;
  }
    next();
  });
  ChangellyTransaction.pre('update', function() {
    const tmp = Math.round(new Date().getTime() / 1000);
    this.update({}, { $set: { updatedAt: new Date() , updatedAtTs: tmp } });
});
ChangellyTransaction.pre('updateOne', function() {
  const tmp = Math.round(new Date().getTime() / 1000);

  this.updateOne({}, { $set: { updatedAt: new Date(), updatedAtTs: tmp } });
});
module.exports = mongoose.model('changelly_transaction', ChangellyTransaction, 'changelly_transaction');