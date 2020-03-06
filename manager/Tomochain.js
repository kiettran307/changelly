const FormData = require('form-data');
const fs = require('fs');
 const fetch = require('node-fetch');
 const axios = require('axios');
const form = new FormData();
form.append('name', 'file0');
form.append('filename', 'forms/')
form.append('my_file', fs.createReadStream('/Users/kiet/Desktop/rb-marketing/forms/car_dcreation_form_en.jpg'));
// const request = http.request({
//   method: 'post',
//   host: 'localhost',
//   port: 5001,
//   path: '/api/v0/add',
//   headers: form.getHeaders()
// });
 
// form.pipe(request);
 
// request.on('response', function(res) {
//   console.log(res.json());
// });

fetch('http://localhost:5001/api/v0/add', { method: 'POST', body: form })
    .then(function(res) {
        return res;
    }).then(function(json) {
        console.log(json);
    });

// const formHeaders = form.getHeaders();
 
// axios.post('http://localhost:5001/api/v0/add', form, {
//   responseType: 'json',
//   headers: {
//     ...formHeaders,
//   },
// })
// .then((response) => {
//   // console.log('response ', JSON.parse(response.data));
//   console.log('response ', response.data.Name);
// })
// .catch(error => error)