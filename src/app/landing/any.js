const https = require('https');

const req = https.request({
    hostname: 'raw.githubusercontent.com',
    port: 443,
    path: '/eminbdr/datasets_from_books/main/constants.json',
    method: 'GET',
  }, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {

      any_val = JSON.parse(data);
        console.log(any_val)
    
  });
});

req.on('error', (error) => {
  console.error('Error fetching data:', error);
});

req.end();
