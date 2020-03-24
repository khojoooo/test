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

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/minho/whfwkrwkr/pages/index.js?entry';


var MailLogin = function (_Component) {
  (0, _inherits3.default)(MailLogin, _Component);

  function MailLogin() {
    (0, _classCallCheck3.default)(this, MailLogin);

    return (0, _possibleConstructorReturn3.default)(this, (MailLogin.__proto__ || (0, _getPrototypeOf2.default)(MailLogin)).apply(this, arguments));
  }

  (0, _createClass3.default)(MailLogin, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, { textAlign: 'center', style: { height: '40vh' }, verticalAlign: 'middle', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { style: { maxWidth: 450 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_semanticUiReact.Header, { as: 'h2', color: 'teal', textAlign: 'center', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, '\uADC0\uD558\uC758 \uACC4\uC815\uC744 \uB85C\uADF8\uC778\uD574\uC8FC\uC138\uC694'), _react2.default.createElement(_semanticUiReact.Form, { size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Segment, { stacked: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Input, { fluid: true, icon: 'user', iconPosition: 'left', placeholder: '\uC544\uC774\uB514', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }), _react2.default.createElement(_semanticUiReact.Form.Input, {
        fluid: true,
        icon: 'lock',
        iconPosition: 'left',
        placeholder: '\uBE44\uBC00\uBC88\uD638',
        type: 'password',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }), _react2.default.createElement(_semanticUiReact.Button, { color: 'teal', fluid: true, size: 'large', __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, '\uB85C\uADF8\uC778'))), _react2.default.createElement(_semanticUiReact.Message, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, '\uCC98\uC74C\uC774\uC2ED\uB2C8\uAE4C?', _react2.default.createElement(_routes.Link, { route: '/signUp', __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, '\uD68C\uC6D0\uAC00\uC785'))), _react2.default.createElement(_semanticUiReact.Message, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement(_routes.Link, { route: '/addMail', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', { href: '#', __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, '\uD0DD\uBC30 \uB4F1\uB85D'))))));
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

  return MailLogin;
}(_react.Component);

exports.default = MailLogin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiRm9ybSIsIkdyaWQiLCJIZWFkZXIiLCJJbWFnZSIsIk1lc3NhZ2UiLCJTZWdtZW50IiwiZmFjdG9yeSIsIkxpbmsiLCJNYWlsTG9naW4iLCJoZWlnaHQiLCJtYXhXaWR0aCIsIm1ldGhvZHMiLCJnZXREZXBsb3llZE1haWxzIiwiY2FsbCIsIm1haWxzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVEsQUFBTSxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUNyRCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFZOzs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7NkJBT0ksQUFDTjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUMsdUNBQUssV0FBTixBQUFnQixVQUFTLE9BQU8sRUFBRSxRQUFsQyxBQUFnQyxBQUFVLFVBQVUsZUFBcEQsQUFBa0U7b0JBQWxFO3NCQUFBLEFBQ0U7QUFERjt5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFPLEVBQUUsVUFBdEIsQUFBb0IsQUFBWTtvQkFBaEM7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMseUNBQU8sSUFBUixBQUFXLE1BQUssT0FBaEIsQUFBc0IsUUFBTyxXQUE3QixBQUF1QztvQkFBdkM7c0JBQUE7QUFBQTtTQURGLEFBQ0UsQUFHRSxxR0FBQSxBQUFDLHVDQUFLLE1BQU4sQUFBVztvQkFBWDtzQkFBQSxBQUNBO0FBREE7eUJBQ0EsQUFBQywwQ0FBUSxTQUFUO29CQUFBO3NCQUFBLEFBQ0U7QUFERjt1Q0FDRSxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLE1BQWtCLE1BQWxCLEFBQXVCLFFBQU8sY0FBOUIsQUFBMkMsUUFBTyxhQUFsRCxBQUE4RDtvQkFBOUQ7c0JBREYsQUFDRSxBQUNBO0FBREE7d0NBQ0EsQUFBQyxzQkFBRCxBQUFNO2VBQU4sQUFFRTtjQUZGLEFBRU8sQUFDTDtzQkFIRixBQUdlLEFBQ2I7cUJBSkYsQUFJYyxBQUNaO2NBTEYsQUFLTzs7b0JBTFA7c0JBRkYsQUFFRSxBQVFBO0FBUkE7QUFDRSwwQkFPRixBQUFDLHlDQUFPLE9BQVIsQUFBYyxRQUFPLE9BQXJCLE1BQTJCLE1BQTNCLEFBQWdDO29CQUFoQztzQkFBQTtBQUFBO1NBZk4sQUFJSSxBQUNBLEFBVUUsQUFLSix5Q0FBQSxBQUFDOztvQkFBRDtzQkFBQTtBQUFBO0FBQUEsU0FFRSx5REFBQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxPQUFHLE1BQUgsQUFBUTtvQkFBUjtzQkFBQTtBQUFBO1NBdkJOLEFBb0JFLEFBRUUsQUFDRSxBQUdKLCtDQUFBLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMsOEJBQUssT0FBTixBQUFZO29CQUFaO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxjQUFBLE9BQUcsTUFBSCxBQUFRO29CQUFSO3NCQUFBO0FBQUE7U0EvQlosQUFDRSxBQUNFLEFBQ0UsQUEwQkUsQUFDRSxBQUNFLEFBT2I7Ozs7Ozs7Ozs7Ozt1QkE1Q3FCLGtCQUFBLEFBQVEsUUFBUixBQUFnQixtQixBQUFoQixBQUFtQzs7bUJBQWpEO0E7aURBRUMsRUFBRSxPLEFBQUYsQUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZDcEIsQSxBQWpEd0I7O2tCQWlEeEIsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9taW5oby93aGZ3a3J3a3IifQ==