var fs = require('fs');
var ext = "";
if (process.argv.length >= 3)
  ext = process.argv[2];
  
 fs.readdir("./", function(err, data) {
     for(var i = 0; i < data.length; ++i) {
         if ( data[i].indexOf(ext, data[i].length - ext.length) !== -1 )
             console.log(data[i]);
     }
 });

