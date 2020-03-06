/**
 * Created by A on 7/18/17.
 */
"use strict";
const fs = require("fs");

module.exports = {
  hello() {
    return new Promise((resolve, reject) => {
      let appInfo;
      try {
        appInfo = JSON.parse(fs.readFileSync("package.json", "utf8"));
        if (appInfo) {
          return resolve({
            app: `${appInfo.name}`,
            version: `${appInfo.version}`,
            statusCode: 200
          });
        } 
          return resolve({
            error : 'can not read app info!',
            statusCode: 503
          });
        
      } catch (error) {
        return reject(error);
      }
    });
  }
};
