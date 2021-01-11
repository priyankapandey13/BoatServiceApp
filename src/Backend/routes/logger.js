function log(req, res, next){
console.log('Logging/ loading.....');
   
res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header(
    "Access-Control-Allow-Headers",
    "x-auth-token, Origin, Content-Type, Accept"
  );

  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
    next();
  }

  module.exports = log;