var readYaml = require('read-yaml');
readYaml('pages.yml', function(err, data) {
   if (err) throw err;
   console.log(data);
});