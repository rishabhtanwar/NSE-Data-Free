"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
var swaggerDocOptions_1 = require("./swaggerDocOptions");
var index_1 = require("./index");
var helpers_1 = require("./helpers");
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
var hostUrl = process.env.HOST_URL || "http://localhost:".concat(port);
var nseIndia = new index_1.NseIndia();
var serverless = require('serverless-http');
var router = express_1.default.Router();
var openapiSpecification = (0, swagger_jsdoc_1.default)(swaggerDocOptions_1.swaggerDocOptions);
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(openapiSpecification));
/**
 * @openapi
 * /:
 *   get:
 *     description: To get market status
 *     tags:
 *       - Base
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE market status
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.MARKET_STATUS)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _c.sent();
                res.status(400).json(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/v1/swagger.json:
 *   get:
 *     description: To get open api specification for swagger documentation
 *     tags:
 *       - Base
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of open api specification
 */
router.get('/api/v1/swagger.json', function (_req, res) {
    res.json(openapiSpecification);
});
/**
 * @openapi
 * /api/glossary:
 *   get:
 *     description: To get glossary of NSE India
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of glossary for NSE India
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/glossary', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_2;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.GLOSSARY)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_2 = _c.sent();
                res.status(400).json(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/marketStatus:
 *   get:
 *     description: To get market status
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE market status
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/marketStatus', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_3;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.MARKET_STATUS)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_3 = _c.sent();
                res.status(400).json(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/marketTurnover:
 *   get:
 *     description: To get market turn over
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE market turn over
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/marketTurnover', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_4;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.MARKET_TURNOVER)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_4 = _c.sent();
                res.status(400).json(error_4);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equityMaster:
 *   get:
 *     description: To get equity master
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE equity master
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equityMaster', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_5;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.EQUITY_MASTER)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_5 = _c.sent();
                res.status(400).json(error_5);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/holidays:
 *   get:
 *     description: To get holidays of NSE India
 *     tags:
 *       - Common
 *     parameters:
 *       - name: type
 *         in: query
 *         description: Holiday list for
 *         required: true
 *         schema:
 *           type: string
 *           enum: [trading,clearing]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE India's holidays
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/holidays', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var type, _a, _b, _c, _d, error_6;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 6]);
                type = req.query.type;
                if (!(type === 'clearing')) return [3 /*break*/, 2];
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.HOLIDAY_CLEARING)];
            case 1:
                _b.apply(_a, [_e.sent()]);
                return [3 /*break*/, 4];
            case 2:
                _d = (_c = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.HOLIDAY_TRADING)];
            case 3:
                _d.apply(_c, [_e.sent()]);
                _e.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_6 = _e.sent();
                res.status(400).json(error_6);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/circulars:
 *   get:
 *     description: To get NSE India's circulars
 *     tags:
 *       - Common
 *     parameters:
 *       - name: isLatest
 *         in: query
 *         description: Boolean value get latest circulars
 *         required: false
 *         schema:
 *           type: boolean
 *           default: false
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE India's circulars
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/circulars', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isLatest, _a, _b, _c, _d, error_7;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 6]);
                isLatest = req.query.isLatest;
                if (!(isLatest === 'true')) return [3 /*break*/, 2];
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.LATEST_CIRCULARS)];
            case 1:
                _b.apply(_a, [_e.sent()]);
                return [3 /*break*/, 4];
            case 2:
                _d = (_c = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.CIRCULARS)];
            case 3:
                _d.apply(_c, [_e.sent()]);
                _e.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_7 = _e.sent();
                res.status(400).json(error_7);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/mergedDailyReports:
 *   get:
 *     description: To get merged daily reports
 *     tags:
 *       - Common
 *     parameters:
 *       - name: key
 *         in: query
 *         description: Key for merged daily reports
 *         required: true
 *         schema:
 *           type: string
 *           enum: [capital,derivatives,debt]
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of NSE India's merged daily reports
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/mergedDailyReports', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var key, _a, _b, _c, _d, _e, _f, error_8;
    return __generator(this, function (_g) {
        switch (_g.label) {
            case 0:
                _g.trys.push([0, 7, , 8]);
                key = req.query.key;
                if (!(key === 'debt')) return [3 /*break*/, 2];
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.MERGED_DAILY_REPORTS_DEBT)];
            case 1:
                _b.apply(_a, [_g.sent()]);
                return [3 /*break*/, 6];
            case 2:
                if (!(key === 'derivatives')) return [3 /*break*/, 4];
                _d = (_c = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.MERGED_DAILY_REPORTS_DERIVATIVES)];
            case 3:
                _d.apply(_c, [_g.sent()]);
                return [3 /*break*/, 6];
            case 4:
                _f = (_e = res).json;
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.MERGED_DAILY_REPORTS_CAPITAL)];
            case 5:
                _f.apply(_e, [_g.sent()]);
                _g.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_8 = _g.sent();
                res.status(400).json(error_8);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/allIndices:
 *   get:
 *     description: To get all NSE indices
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of all NSE indices
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/allIndices', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var allIndices, error_9;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.ALL_INDICES)];
            case 1:
                allIndices = _a.sent();
                res.json(allIndices);
                return [3 /*break*/, 3];
            case 2:
                error_9 = _a.sent();
                res.status(400).json(error_9);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/indexNames:
 *   get:
 *     description: To get all NSE index names
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of all NSE index names
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/indexNames', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var indexNames, error_10;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, nseIndia.getDataByEndpoint(index_1.ApiList.INDEX_NAMES)];
            case 1:
                indexNames = _a.sent();
                res.json(indexNames);
                return [3 /*break*/, 3];
            case 2:
                error_10 = _a.sent();
                res.status(400).json(error_10);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/allSymbols:
 *   get:
 *     description: To get all NSE equity symbols
 *     tags:
 *       - Common
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns an array of NSE equity symbols
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/allSymbols', function (_req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var symbols, error_11;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, nseIndia.getAllStockSymbols()];
            case 1:
                symbols = _a.sent();
                res.json(symbols);
                return [3 /*break*/, 3];
            case 2:
                error_11 = _a.sent();
                res.status(400).json(error_11);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equity/{symbol}:
 *   get:
 *     description: To get details of the NSE symbol
 *     tags:
 *       - Equity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: symbol
 *         in: path
 *         description: NSE Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     responses:
 *       200:
 *         description: Returns a details of the NSE symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equity/:symbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_12;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquityDetails(req.params.symbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_12 = _c.sent();
                res.status(400).json(error_12);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equity/series/{symbol}:
 *   get:
 *     description: To get equity series of the NSE symbol
 *     tags:
 *       - Equity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: symbol
 *         in: path
 *         description: NSE Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     responses:
 *       200:
 *         description: Returns a equity series of the NSE symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equity/series/:symbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_13;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquitySeries(req.params.symbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_13 = _c.sent();
                res.status(400).json(error_13);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equity/tradeInfo/{symbol}:
 *   get:
 *     description: To get trade info of the NSE symbol
 *     tags:
 *       - Equity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: symbol
 *         in: path
 *         description: NSE Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     responses:
 *       200:
 *         description: Returns a trade info of the NSE symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equity/tradeInfo/:symbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_14;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquityTradeInfo(req.params.symbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_14 = _c.sent();
                res.status(400).json(error_14);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equity/corporateInfo/{symbol}:
 *   get:
 *     description: To get corporate info of the NSE symbol
 *     tags:
 *       - Equity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: symbol
 *         in: path
 *         description: NSE Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     responses:
 *       200:
 *         description: Returns a corporate info of the NSE symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equity/corporateInfo/:symbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_15;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquityCorporateInfo(req.params.symbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_15 = _c.sent();
                res.status(400).json(error_15);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equity/intraday/{symbol}:
 *   get:
 *     description: To get intraday trade info of the NSE symbol
 *     tags:
 *       - Equity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: symbol
 *         in: path
 *         description: NSE Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *       - name: preOpen
 *         in: query
 *         description: Boolean to get preOpen data
 *         required: false
 *         schema:
 *           type: boolean
 *           default: false
 *     responses:
 *       200:
 *         description: Returns a intraday trade info of the NSE symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equity/intraday/:symbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isPreOpen, _a, _b, _c, _d, error_16;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 6]);
                isPreOpen = req.query.preOpen;
                if (!(isPreOpen === "true")) return [3 /*break*/, 2];
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquityIntradayData(req.params.symbol, true)];
            case 1:
                _b.apply(_a, [_e.sent()]);
                return [3 /*break*/, 4];
            case 2:
                _d = (_c = res).json;
                return [4 /*yield*/, nseIndia.getEquityIntradayData(req.params.symbol)];
            case 3:
                _d.apply(_c, [_e.sent()]);
                _e.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_16 = _e.sent();
                res.status(400).json(error_16);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/equity/historical/{symbol}:
 *   get:
 *     description: To get details of the NSE symbol
 *     tags:
 *       - Equity
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: symbol
 *         in: path
 *         description: NSE Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *       - name: dateStart
 *         in: query
 *         description: "Start date to pull historical data (format: YYYY-MM-DD)"
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *       - name: dateEnd
 *         in: query
 *         description: "End date to pull historical data (format: YYYY-MM-DD)"
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Returns a historical data of the NSE symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/equity/historical/:symbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dateStart, dateEnd, start, end, range, _a, _b, _c, _d, error_17;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 7, , 8]);
                dateStart = req.query.dateStart;
                dateEnd = req.query.dateEnd;
                if (!(dateStart && dateEnd)) return [3 /*break*/, 4];
                start = new Date(dateStart);
                end = new Date(dateEnd);
                if (!(start.getTime() > 0 && end.getTime() > 0)) return [3 /*break*/, 2];
                range = {
                    start: start,
                    end: end
                };
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquityHistoricalData(req.params.symbol, range)];
            case 1:
                _b.apply(_a, [_e.sent()]);
                return [3 /*break*/, 3];
            case 2:
                res.status(400).json({ error: 'Invalid date format. Please use the format (YYYY-MM-DD)' });
                _e.label = 3;
            case 3: return [3 /*break*/, 6];
            case 4:
                _d = (_c = res).json;
                return [4 /*yield*/, nseIndia.getEquityHistoricalData(req.params.symbol)];
            case 5:
                _d.apply(_c, [_e.sent()]);
                _e.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_17 = _e.sent();
                res.status(400).json(error_17);
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/index/{indexSymbol}:
 *   get:
 *     description: To get detailsof the NSE index
 *     tags:
 *       - Index
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: indexSymbol
 *         in: path
 *         description: NSE index symbol
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     responses:
 *       200:
 *         description: Returns a details of the NSE index symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/index/:indexSymbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_18;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getEquityStockIndices(req.params.indexSymbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_18 = _c.sent();
                res.status(400).json(error_18);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/index/intraday/{indexSymbol}:
 *   get:
 *     description: To get intraday trade info of the NSE index symbol
 *     tags:
 *       - Index
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: indexSymbol
 *         in: path
 *         description: NSE index symbol
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *       - name: preOpen
 *         in: query
 *         description: Boolean to get preOpen data
 *         required: false
 *         schema:
 *           type: boolean
 *           default: false
 *     responses:
 *       200:
 *         description: Returns a intraday trade info of the NSE index symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/index/intraday/:indexSymbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var isPreOpen, _a, _b, _c, _d, error_19;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 5, , 6]);
                isPreOpen = req.query.preOpen;
                if (!(isPreOpen === "true")) return [3 /*break*/, 2];
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getIndexIntradayData(req.params.indexSymbol, true)];
            case 1:
                _b.apply(_a, [_e.sent()]);
                return [3 /*break*/, 4];
            case 2:
                _d = (_c = res).json;
                return [4 /*yield*/, nseIndia.getIndexIntradayData(req.params.indexSymbol)];
            case 3:
                _d.apply(_c, [_e.sent()]);
                _e.label = 4;
            case 4: return [3 /*break*/, 6];
            case 5:
                error_19 = _e.sent();
                res.status(400).json(error_19);
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/index/historical/{indexSymbol}:
 *   get:
 *     description: To get the historical data for the NSE index symbol
 *     tags:
 *       - Index
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: indexSymbol
 *         in: path
 *         description: NSE Index Symbol of the Equity
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *       - name: dateStart
 *         in: query
 *         description: "Start date to pull historical data (format: YYYY-MM-DD)"
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *       - name: dateEnd
 *         in: query
 *         description: "End date to pull historical data (format: YYYY-MM-DD)"
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Returns a historical data of the NSE index symbol
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/index/historical/:indexSymbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var dateStart, dateEnd, start, end, range, _a, _b, error_20;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 6, , 7]);
                dateStart = req.query.dateStart;
                dateEnd = req.query.dateEnd;
                if (!(dateStart && dateEnd)) return [3 /*break*/, 4];
                start = new Date(dateStart);
                end = new Date(dateEnd);
                if (!(start.getTime() > 0 && end.getTime() > 0)) return [3 /*break*/, 2];
                range = {
                    start: start,
                    end: end
                };
                _b = (_a = res).json;
                return [4 /*yield*/, nseIndia.getIndexHistoricalData(req.params.indexSymbol, range)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                res.status(400).json({ error: 'Invalid date format. Please use the format (YYYY-MM-DD)' });
                _c.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                res.status(400).json({ error: 'Missing arguments "dateStart" or "dateEnd". Please pass those argumets.' });
                _c.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_20 = _c.sent();
                res.status(400).json(error_20);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/gainersAndLosers/{indexSymbol}:
 *   get:
 *     description: To get gainers and losers of the specific index
 *     tags:
 *       - Helpers
 *     parameters:
 *       - name: indexSymbol
 *         in: path
 *         description: NSE index symbol
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of the specified index's gainers and losers
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/gainersAndLosers/:indexSymbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_21;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, (0, helpers_1.getGainersAndLosersByIndex)(req.params.indexSymbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_21 = _c.sent();
                res.status(400).json(error_21);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
/**
 * @openapi
 * /api/mostActive/{indexSymbol}:
 *   get:
 *     description: To get most active equities of the specific index
 *     tags:
 *       - Helpers
 *     parameters:
 *       - name: indexSymbol
 *         in: path
 *         description: NSE index symbol
 *         required: true
 *         schema:
 *           type: string
 *           format: any
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a JSON object of most active equities of the specified index
 *       400:
 *         description: Returns a JSON error object of API call
 */
router.get('/api/mostActive/:indexSymbol', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _b, error_22;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 2, , 3]);
                _b = (_a = res).json;
                return [4 /*yield*/, (0, helpers_1.getMostActiveEquities)(req.params.indexSymbol)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [3 /*break*/, 3];
            case 2:
                error_22 = _c.sent();
                res.status(400).json(error_22);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
app.listen(port, function () {
    console.log("NseIndia App started in port ".concat(port));
    console.log("Open ".concat(hostUrl, " in browser."));
    console.log("For API docs: ".concat(hostUrl, "/api-docs"));
});
//# sourceMappingURL=server.js.map