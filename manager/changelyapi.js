const Boom = require('boom');
require("isomorphic-fetch") 
const { Changelly } = require('changelly-js');
const apiKey = process.env.apiKey;
const apiSecret = process.env.apiSecret;
const changelly = new Changelly(apiKey, apiSecret);
const ChangellyTransaction = require('../model/ChangellyTransaction')
const Changely = {
getCurrencies(req) {
    return new Promise((resolve, reject) => {
      
        changelly.getCurrencies().then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          }) 
      });
  },
  getFixRateForAmount(req) {
    return new Promise((resolve, reject) => {
        changelly.getFixRateForAmount([{from: req.payload.from,to: req.payload.to,amountFrom: req.payload.amount}]).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          }) 
      });
  },
  getFixRate(req) {
    return new Promise((resolve, reject) => {
        changelly.getFixRate([{from: req.payload.from,to: req.payload.to}]).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          }) 
      });
  },//getPairsParams
  getPairsParams(req) {
    return new Promise((resolve, reject) => {
      console.log('getPairsParams ');
        changelly.getPairsParams([{from: req.payload.from,to: req.payload.to}]).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          }) 
      });
  },
  getCurrenciesFull(req) {
    return new Promise((resolve, reject) => {
        changelly.getCurrenciesFull().then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  getMinAmount(req) {
    return new Promise((resolve, reject) => {
        changelly.getMinAmount(req.payload.from, req.payload.to).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  getExchangeAmount(req) {
    return new Promise((resolve, reject)=>{
        changelly.getExchangeAmount([{from: req.payload.from,to: req.payload.to, amount: req.payload.amount.toString()}]).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  generateAddress(req) {
    return new Promise((resolve, reject) => {
        changelly.generateAddress([req.payload.from, req.payload.to, req.payload.address]).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  validateAddress(req) {
    return new Promise((resolve, reject) => {
        changelly.validateAddress(req.payload.currency, req.payload.address).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  createTransaction(req) {
    return new Promise((resolve, reject) => {
        changelly.createTransaction(req.payload.from, req.payload.to, req.payload.address, req.payload.amount).then(async(res) => {
          req.payload.id = res.id;
          const model = new ChangellyTransaction(req.payload);
          await model.save();
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  createFixTransaction(req) {
    return new Promise((resolve, reject) => {
        changelly.createFixTransaction(req.payload.from, req.payload.to,req.payload.address, req.payload.rateId, req.payload.refundAddress, req.payload.amountFrom).then(async(res) => {
          req.payload.id = res.id;
          const model = new ChangellyTransaction(req.payload);
          await model.save();
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  getStatus(req) {
    return new Promise((resolve, reject) => {
        changelly.getStatus(req.payload.id).then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
  getTransactions(req) {
    return new Promise((resolve, reject) => {
        changelly.getTransactions().then(res => {
            return resolve({
                status: 'success',
                data: res,
                error: false,
              });
          }).catch (error => {
            return resolve(Boom.badRequest(error.message));
          })
    });
  },
};
module.exports = Changely;