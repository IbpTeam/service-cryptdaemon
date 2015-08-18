var crypt = require('../interface/proxy.js').getProxy();

crypt.getsymkey("21232",function(res){
  console.log(res.ret);
});
