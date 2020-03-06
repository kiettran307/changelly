/**
 * Created by A on 7/18/17.
 */
'use strict';
const Manager                   = require('../manager/changelyapi');
const Joi                       = require('joi');
const Response                  = require('./response').setup(Manager);

module.exports = {
    getCurrencies: {
        tags: ['api', 'Changely'],
        handler: function (req, res) {
            Response(req, res, 'getCurrencies');
        },
    },
    getCurrenciesFull: {
        tags: ['api', 'Changely'],
        handler: function (req, res) {
            Response(req, res, 'getCurrenciesFull');
        },
    },
    getMinAmount: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required()
            })
        },
        handler: function (req, res) {
            Response(req, res, 'getMinAmount');
        },
    },
    getExchangeAmount: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
                amount: Joi.string().required()
            })
        },
        handler: function (req, res) {
            Response(req, res, 'getExchangeAmount');
        },
    },
    generateAddress: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
                address: Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'generateAddress');
        },
    },
    validateAddress: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                currency: Joi.string().required(),
                address   : Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'validateAddress');
        },
    },
    createTransaction: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
                address: Joi.string().required(),
                amount: Joi.string().required(),
                email: Joi.string().optional(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'createTransaction');
        },
    },
    getStatus: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                id: Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'getStatus');
        },
    },
    getFixRateForAmount: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
                amount: Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'getFixRateForAmount');
        },
    },
    getFixRate: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'getFixRate');
        },
    },//
    getPairsParams: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'getPairsParams');
        },
    },
    createFixTransaction: {
        tags: ['api', 'Changely'],
        validate: {
            payload: Joi.object({
                from: Joi.string().required(),
                to   : Joi.string().required(),
                rateId: Joi.string().required(),
                address : Joi.string().required(),
                refundAddress: Joi.string().required(),
                amountFrom: Joi.string().required(),
            })
        },
        handler: function (req, res) {
            Response(req, res, 'createFixTransaction');
        },
    },
    getTransactions: {
        tags: ['api', 'Changely'],
        handler: function (req, res) {
            Response(req, res, 'getTransactions');
        },
    }
   
}