'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/minho/whfwkrwkr/pages/index.js?entry';


var MailIndex = function (_Component) {
  (0, _inherits3.default)(MailIndex, _Component);

  function MailIndex() {
    (0, _classCallCheck3.default)(this, MailIndex);

    return (0, _possibleConstructorReturn3.default)(this, (MailIndex.__proto__ || (0, _getPrototypeOf2.default)(MailIndex)).apply(this, arguments));
  }

  (0, _createClass3.default)(MailIndex, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      }, _react2.default.createElement(_semanticUiReact.Button.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, '\uC0AC\uC6A9\uC790'), _react2.default.createElement(_semanticUiReact.Button.Or, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { positve: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, '\uAD00\uB9AC\uC790')));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var mails;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _factory2.default.methods.getDeployedMails().call();

              case 2:
                mails = _context.sent;
                return _context.abrupt('return', { mails: mails });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MailIndex;
}(_react.Component);

exports.default = MailIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiZmFjdG9yeSIsIk1haWxJbmRleCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZE1haWxzIiwiY2FsbCIsIm1haWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTOztBQUNULEFBQU8sQUFBYTs7Ozs7Ozs7O0ksQUFFZDs7Ozs7Ozs7Ozs7NkJBT0ksQUFDTjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNHLGNBQUQsd0JBQUEsQUFBUTs7b0JBQVI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLHFEQUFBLEFBQUMsd0JBQUQsQUFBUTs7b0JBQVI7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDLHlDQUFPLFNBQVI7b0JBQUE7c0JBQUE7QUFBQTtTQUxOLEFBQ0UsQUFDRSxBQUdFLEFBSVA7Ozs7Ozs7Ozs7Ozt1QkFmcUIsa0JBQUEsQUFBUSxRQUFSLEFBQWdCLG1CLEFBQWhCLEFBQW1DOzttQkFBakQ7QTtpREFFQyxFQUFFLE8sQUFBRixBQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUFKSSxBQW9CeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvbWluaG8vd2hmd2tyd2tyIn0=