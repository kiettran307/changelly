"use strict";
const Boom = require("boom");
const sgMail = require('@sendgrid/mail');
const validator = require("email-validator");
require('../config/environment');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const Email = {
  sendMailContact(req) {
    return new Promise((resolve, reject) => {
      try {
        const fullname = req.payload.fullname;
        const email = req.payload.email;
        const address = req.payload.address;
        const subject = req.payload.subject? req.payload.subject: '';
        const message = req.payload.message ? req.payload.message: '';
        const type = req.payload.type ? req.payload.type: '';
        const environment = req.payload.environment ? req.payload.environment: '';
        const os = req.payload.os ? req.payload.os: '';
        const version = req.payload.version ? req.payload.version: '';
        const isValidEmail = validator.validate(req.payload.email);
        if (!isValidEmail) {
          return resolve(Boom.badRequest('Email is not valid!'));
        }
        const attachmentParams = req.payload.attachments;
        const attachments = [];
        if (attachmentParams && attachmentParams.length > 0) {
          for (let index = 0; index < attachmentParams.length; index++) {
            const element = attachmentParams[index];//
            const data = element.data;
            const name = element.name;
            attachments.push({filename: name, content_id: (index + 1).toString(), content: data, disposition: 'inline'});
        }
        }
        
        const msg = {
          to: process.env.ADMIN_EMAIL,
          from: email,
          subject: '[Inquiry] ' + subject,
          attachments : attachments,
          text: 'and easy to do anywhere, even with Node.js',
          html: '<div style="border: 1px solid #e5e5e5; padding: 15px 20px; max-width: 600px; margin: auto;">' +
                      '<p>Hello Admin,</p>' +
                      '<p><br />You got a new message from ' + fullname + ':</p>' +
                      '<p style="padding: 12px; border-left: 6px solid #eee; font-style: italic;"><span style="font-style: normal;">Address: ' + address + '</span></p>' +
                      '<p style="padding: 12px; border-left: 6px solid #eee;"><span style="font-style: normal;white-space: pre-line;">Description: ' + message + '</span></p>' +
                      '<p style="padding: 12px; border-left: 6px solid #eee; font-style: italic;"><span style="font-style: normal;">Need help: ' + type + '</span></p>' +
                      '<p style="padding: 12px; border-left: 6px solid #eee; font-style: italic;"><span style="font-style: normal;">Environment: ' + environment +' </span></p>' +
                      '<p style="padding: 12px; border-left: 6px solid #eee; font-style: italic;"><span style="font-style: normal;">OS: ' + os + '</span></p>' +
                      '<p style="padding: 12px; border-left: 6px solid #eee; font-style: italic;"><span style="font-style: normal;">Version: ' + version  + '</span></p>' +
                      '<p>&nbsp;<br />Best wishes,<br /></p>' +
                      '</div>',
       };
        sgMail.send(msg).then(rs => {
            if (rs[0].statusCode === 202) {
              return resolve({
                error: false,
                message: 'Sent',
              });
            }
        }).catch(e => {
            return resolve(Boom.badRequest(e.message));
        });
       
      } catch (error) {
        return resolve(Boom.badRequest(error.message));
      }
    });
  }
};
module.exports = Email;