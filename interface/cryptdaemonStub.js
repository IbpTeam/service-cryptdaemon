// This file is auto generated based on user-defined interface.
// Please make sure that you have checked all TODOs in this file.
// TODO: please replace types with peramters' name you wanted of any functions
// TODO: please replace $ipcType with one of dbus, binder, websocket and socket
var crypt = require("../implements/cryptdaemon.js");
var initObj = {
  "address": "nodejs.webde.cryptdaemon",
  "path": "/nodejs/webde/cryptdaemon",
  "name": "nodejs.webde.cryptdaemon",
  "type": "dbus",
  "service": true,
  "interface": [{
    "name": "getsymkey",
    "in": [
      "String"
    ],
    "show": "l"
  }, {
    "name": "getrsakey",
    "in": [
      "String"
    ],
    "show": "l"
  }],
  "serviceObj": {
    getsymkey: function(val, callback) {
      var retObj = new Object();
      crypt.getsymkey(function(key) {
        retObj.ret = key;
        callback(retObj);
      }, val);
    },
    getrsakey: function(String, callback) { /* TODO: Implement your service. Make sure that call the callback at the end of this function whose parameter is the return of this service.*/ }
  }
}

function Stub() {
  this._ipc = require('webde-rpc').getIPC(initObj);
}

Stub.prototype.notify = function(event) {
  this._ipc.notify.apply(this._ipc, arguments);
};

var stub = null,
  cd = null;
exports.getStub = function(proxyAddr) {
  if (stub == null) {
    if (typeof proxyAddr === 'undefined')
      throw 'The path of proxy\'s module file we need!';
    // TODO: replace $cdProxy to the path of commdaemonProxy
    cd = require('../../commdaemon/interface/commdaemonProxy.js').getProxy();
    cd.register(initObj.name, proxyAddr, function(ret) {
      if (ret.err) {
        return console.log(ret.err, 'This service cannot be accessed from other devices since failed to register on CD');
      }
    });
    stub = new Stub();
  }
  return stub;
}