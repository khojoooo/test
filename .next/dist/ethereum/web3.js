'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  //window는 브라우저에서만 실행되는데 next는 서버사이드 렌더링 방식이기 때문에 서버에서 렌더링한번하고 브라우저에서 렌더링을 또하기 때문에 서버에서 실행되지 않아 오류가 발생한다
  web3 = new _web2.default(window.web3.currentProvider); //provider == metamask
} else {
  //We are on the server or the user is not running metamask
  var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/0e555da2ac9e47f596b78b40a8f57ba7');
  web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7Ozs7O0FBRVAsSUFBSSxZQUFKOztBQUVBLElBQUksT0FBQSxBQUFPLFdBQVAsQUFBa0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxTQUFuRCxBQUE0RDtBQUUxRDtBQUNBO1NBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FIZ0QsQUFHdkUsQUFBTyxBQUFxQixpQkFIMkMsQUFDdkUsQ0FFOEMsQUFDL0M7QUFKRCxPQUlPLEFBQ0w7QUFDQTtNQUFNLFdBQVcsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQUFwQyxBQUFpQixBQUNmLEFBRUY7U0FBTyxBQUFJLGtCQUFYLEFBQU8sQUFBUyxBQUNqQjtBQUVEOztrQkFBQSxBQUFlIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvbWluaG8vbWFpbCJ9