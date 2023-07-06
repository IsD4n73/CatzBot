const http = require('https');


// http client request
function httprequest(host, path) {
     return new Promise((resolve, reject) => {
        const options = {
            host: host,
            path: path,
            method: 'GET'
        };
        const req = http.request(options, (res) => {
          if (res.statusCode != 200) {
                return reject(new Error('statusCode=' + res.statusCode));
            }
            var body = [];
            res.on('data', function(chunk) {
                body.push(chunk);
            });

            res.on('end', function() {
                try {
                    body = JSON.parse(Buffer.concat(body).toString());
                } catch(e) {
                    reject(e);
                }
                resolve(body);
            });
        });
        req.on('error', (e) => {
          reject(e.message);
        });
       req.end();
    });
}

// export functions
module.exports = {httprequest};
