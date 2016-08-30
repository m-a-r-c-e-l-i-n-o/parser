'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HandleListenEvent = exports.AdHocRouter = exports.Server = undefined;

require('source-map-support/register.js');

var _status = require('../language/node/status.js');

var _status2 = _interopRequireDefault(_status);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSend = require('koa-send');

var _koaSend2 = _interopRequireDefault(_koaSend);

var _generateReport = require('./generate-report.js');

var _generateReport2 = _interopRequireDefault(_generateReport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

let App = new _koa2.default();

const PostDataParser = (ctx, next) => {
    return new Promise((resolve, reject) => {
        if (ctx.request.method == 'POST') {
            const data = [];
            ctx.req.on('data', chunk => {
                data.push(chunk.toString());
            });
            ctx.req.on('end', () => {
                resolve(data);
            });
        }
    });
};

const AdHocRouter = (() => {
    var _ref = _asyncToGenerator(function* (ctx, next) {
        if (ctx.request.method === 'GET') {
            if (ctx.path === '/') {
                ctx.path = 'index.html';
            }
            const found = yield (0, _koaSend2.default)(ctx, ctx.path, {
                root: _path2.default.join(process.cwd(), 'dist/client')
            });
            ctx.status = found ? 200 : 404;
            next();
        } else if (ctx.request.method === 'POST') {
            const postData = yield next();
            if (ctx.path === '/generate-report') {
                const report = JSON.parse(postData);
                const parsedReport = (0, _generateReport2.default)(report.type, report.content);
                ctx.body = JSON.stringify(parsedReport);
                ctx.status = 200;
            }
        }
    });

    return function AdHocRouter(_x, _x2) {
        return _ref.apply(this, arguments);
    };
})();

const HandleListenEvent = err => {
    if (err) {
        return console.error(err.stack || err);
    }
    console.log(_status2.default.SERVER_STARTED);
};

App.use(AdHocRouter);
App.use(PostDataParser);

const Server = App.listen(8080, HandleListenEvent);

exports.default = Server;
exports.Server = Server;
exports.AdHocRouter = AdHocRouter;
exports.HandleListenEvent = HandleListenEvent;