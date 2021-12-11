const path = require('path')

// get base name 
console.log(path.basename(__filename));

// if no path, it gives out the whole path
console.log(__filename) 

// directory name
console.log(path.dirname(__filename));

//file extention
console.log(path.extname(__filename));

// path object
console.log(path.parse(__filename));
