var crypt = require('../interface/cryptdaemonProxy.js').getProxy();

crypt.getsymkey("21232",function(res){
  console.log(res.ret);
});