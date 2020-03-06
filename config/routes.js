/**
 * Created by A on 7/18/17.
 */
'use strict';
// const User = require('../route/User');
const AppInfo = require('../route/AppInfo');
const Changely = require('../route/changelyapi');
const Email = require('../route/email');
module.exports = [
    { method: 'GET', path: '/', config : AppInfo.hello},
    { method: 'POST', path: '/mail', config : Email.sendMailContact},
    { method: 'POST', path: '/currencies', config : Changely.getCurrencies},
    { method: 'POST', path: '/currencies-full', config : Changely.getCurrenciesFull},
    { method: 'POST', path: '/min-amount', config : Changely.getMinAmount},
    { method: 'POST', path: '/exchange-amount', config : Changely.getExchangeAmount},
    // { method: 'POST', path: '/generate-address', config : Changely.generateAddress},
    { method: 'POST', path: '/validate-address', config : Changely.validateAddress},
    { method: 'POST', path: '/create-transaction', config : Changely.createTransaction},
    { method: 'POST', path: '/get-status', config : Changely.getStatus},
    { method: 'POST', path: '/get-transactions', config : Changely.getTransactions},
    { method: 'POST', path: '/get-fix-rate-amount', config : Changely.getFixRateForAmount},
    { method: 'POST', path: '/get-fix-rate', config : Changely.getFixRate},//getPairsParams
    { method: 'POST', path: '/get-pairs-params', config : Changely.getPairsParams},//getPairsParams
    { method: 'POST', path: '/create-transaction-fixed', config : Changely.createFixTransaction},
    //createFixTransaction
];