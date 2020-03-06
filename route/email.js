"use strict";
const Manager = require("../manager/email");
const Joi = require("joi");
const Response = require("./response").setup(Manager);

module.exports = {
  sendMailContact: {
    tags: ["api", "Mail"],
    payload: {
      maxBytes: 1000 * 1000 * 10, // 5 Mb
      parse: true
    },
    validate: {
      payload: Joi.object({
        fullname: Joi.string().required(),
        email: Joi.string().email().required(),
        address: Joi.string().alphanum().min(40).max(42).regex(/^0x[a-fA-F0-9]{40}$/).required().error(new Error('address.invalid')),
        subject: Joi.string().required(),
        type: Joi.string(),
        message: Joi.string(),
        environment: Joi.string(),
        os: Joi.string(),
        version: Joi.string(),
        attachments: Joi.array().items(Joi.object({
          name: Joi.string().required(),
          data: Joi.string().required(),
      })).optional()
      }),
    },
    handler: function (req, res) {
      Response(req, res, "sendMailContact");
    }
  },
}