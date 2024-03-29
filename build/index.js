"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.NseIndia = exports.ApiList = void 0;
var axios_1 = __importDefault(require("axios"));
var user_agents_1 = __importDefault(require("user-agents"));
var utils_1 = require("./utils");
var ApiList;
(function (ApiList) {
    ApiList["GLOSSARY"] = "/api/cmsContent?url=/glossary";
    ApiList["HOLIDAY_TRADING"] = "/api/holiday-master?type=trading";
    ApiList["HOLIDAY_CLEARING"] = "/api/holiday-master?type=clearing";
    ApiList["MARKET_STATUS"] = "/api/marketStatus";
    ApiList["MARKET_TURNOVER"] = "/api/market-turnover";
    ApiList["ALL_INDICES"] = "/api/allIndices";
    ApiList["INDEX_NAMES"] = "/api/index-names";
    ApiList["CIRCULARS"] = "/api/circulars";
    ApiList["LATEST_CIRCULARS"] = "/api/latest-circular";
    ApiList["EQUITY_MASTER"] = "/api/equity-master";
    ApiList["MARKET_DATA_PRE_OPEN"] = "/api/market-data-pre-open?key=ALL";
    ApiList["MERGED_DAILY_REPORTS_CAPITAL"] = "/api/merged-daily-reports?key=favCapital";
    ApiList["MERGED_DAILY_REPORTS_DERIVATIVES"] = "/api/merged-daily-reports?key=favDerivatives";
    ApiList["MERGED_DAILY_REPORTS_DEBT"] = "/api/merged-daily-reports?key=favDebt";
})(ApiList = exports.ApiList || (exports.ApiList = {}));
var NseIndia = /** @class */ (function () {
    function NseIndia() {
        this.baseUrl = 'https://www.nseindia.com';
        this.cookies = '';
        this.userAgent = '';
        this.cookieUsedCount = 0;
        this.cookieMaxAge = 60; // should be in seconds
        this.cookieExpiry = new Date().getTime() + (this.cookieMaxAge * 1000);
        this.noOfConnections = 0;
        this.baseHeaders = {
            'Authority': 'www.nseindia.com',
            'Referer': 'https://www.nseindia.com/',
            'Accept': '*/*',
            'Origin': this.baseUrl,
            'Sec-Fetch-Site': 'same-origin',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Ch-Ua': '" Not A;Brand";v="99", "Chromium";v="109", "Google Chrome";v="109"',
            'Sec-Ch-Ua-Mobile': '?0',
            'Sec-Ch-Ua-Platform': '"Windows"',
            'Accept-Language': 'en-US,en;q=0.9',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
        };
    }
    NseIndia.prototype.getNseCookies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, setCookies, cookies_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.cookies === '' || this.cookieUsedCount > 10 || this.cookieExpiry <= new Date().getTime())) return [3 /*break*/, 2];
                        this.userAgent = new user_agents_1.default().toString();
                        return [4 /*yield*/, axios_1.default.get(this.baseUrl, {
                                headers: __assign(__assign({}, this.baseHeaders), { 'User-Agent': this.userAgent })
                            })];
                    case 1:
                        response = _a.sent();
                        setCookies = response.headers['set-cookie'];
                        cookies_1 = [];
                        setCookies === null || setCookies === void 0 ? void 0 : setCookies.forEach(function (cookie) {
                            var requiredCookies = ['nsit', 'nseappid', 'ak_bmsc', 'AKA_A2', 'bm_mi', 'bm_sv'];
                            var cookieKeyValue = cookie.split(';')[0];
                            var cookieEntry = cookieKeyValue.split('=');
                            /* istanbul ignore else */
                            if (requiredCookies.includes(cookieEntry[0])) {
                                cookies_1.push(cookieKeyValue);
                            }
                        });
                        this.cookies = cookies_1.join('; ');
                        this.cookieUsedCount = 0;
                        this.cookieExpiry = new Date().getTime() + (this.cookieMaxAge * 1000);
                        _a.label = 2;
                    case 2:
                        this.cookieUsedCount++;
                        return [2 /*return*/, this.cookies];
                }
            });
        });
    };
    /**
     *
     * @param url NSE API's URL
     * @returns JSON data from NSE India
     */
    NseIndia.prototype.getData = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var retries, hasError, response, _a, _b, _c, _d, _e, error_1;
            var _f, _g;
            return __generator(this, function (_h) {
                switch (_h.label) {
                    case 0:
                        retries = 0;
                        hasError = false;
                        _h.label = 1;
                    case 1:
                        if (!(this.noOfConnections >= 5)) return [3 /*break*/, 3];
                        return [4 /*yield*/, (0, utils_1.sleep)(500)];
                    case 2:
                        _h.sent();
                        return [3 /*break*/, 1];
                    case 3:
                        this.noOfConnections++;
                        _h.label = 4;
                    case 4:
                        _h.trys.push([4, 7, , 8]);
                        _b = (_a = axios_1.default).get;
                        _c = [url];
                        _f = {};
                        _d = [__assign({}, this.baseHeaders)];
                        _g = {};
                        _e = 'Cookie';
                        return [4 /*yield*/, this.getNseCookies()];
                    case 5: return [4 /*yield*/, _b.apply(_a, _c.concat([(_f.headers = __assign.apply(void 0, _d.concat([(_g[_e] = _h.sent(), _g['User-Agent'] = this.userAgent, _g)])),
                                _f)]))];
                    case 6:
                        response = _h.sent();
                        this.noOfConnections--;
                        return [2 /*return*/, response.data];
                    case 7:
                        error_1 = _h.sent();
                        hasError = true;
                        retries++;
                        this.noOfConnections--;
                        if (retries >= 10)
                            throw error_1;
                        return [3 /*break*/, 8];
                    case 8:
                        if (hasError) return [3 /*break*/, 1];
                        _h.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    /**
     *
     * @param apiEndpoint
     * @returns
     */
    NseIndia.prototype.getDataByEndpoint = function (apiEndpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.getData("".concat(this.baseUrl).concat(apiEndpoint))];
            });
        });
    };
    /**
     *
     * @returns List of NSE equity symbols
     */
    NseIndia.prototype.getAllStockSymbols = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getDataByEndpoint(ApiList.MARKET_DATA_PRE_OPEN)];
                    case 1:
                        data = (_a.sent()).data;
                        return [2 /*return*/, data.map(function (obj) { return obj.metadata.symbol; }).sort()];
                }
            });
        });
    };
    /**
     *
     * @param symbol
     * @returns
     */
    NseIndia.prototype.getEquityDetails = function (symbol) {
        return this.getDataByEndpoint("/api/quote-equity?symbol=".concat(encodeURIComponent(symbol.toUpperCase())));
    };
    /**
     *
     * @param symbol
     * @returns
     */
    NseIndia.prototype.getEquityTradeInfo = function (symbol) {
        return this.getDataByEndpoint("/api/quote-equity?symbol=".concat(encodeURIComponent(symbol
            .toUpperCase()), "&section=trade_info"));
    };
    /**
     *
     * @param symbol
     * @returns
     */
    NseIndia.prototype.getEquityCorporateInfo = function (symbol) {
        return this.getDataByEndpoint("/api/quote-equity?symbol=".concat(encodeURIComponent(symbol
            .toUpperCase())));
    };
    /**
     *
     * @param symbol
     * @param isPreOpenData
     * @returns
     */
    NseIndia.prototype.getEquityIntradayData = function (symbol, isPreOpenData) {
        if (isPreOpenData === void 0) { isPreOpenData = false; }
        return __awaiter(this, void 0, void 0, function () {
            var details, identifier, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEquityDetails(symbol.toUpperCase())];
                    case 1:
                        details = _a.sent();
                        identifier = details.info.identifier;
                        url = "/api/chart-databyindex?index=".concat(identifier);
                        if (isPreOpenData)
                            url += '&preopen=true';
                        return [2 /*return*/, this.getDataByEndpoint(url)];
                }
            });
        });
    };
    /**
     *
     * @param symbol
     * @param range
     * @returns
     */
    NseIndia.prototype.getEquityHistoricalData = function (symbol, range) {
        return __awaiter(this, void 0, void 0, function () {
            var data, activeSeries, dateRanges, promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getEquityDetails(symbol.toUpperCase())];
                    case 1:
                        data = _a.sent();
                        activeSeries = data.info.activeSeries.length ? data.info.activeSeries[0] : /* istanbul ignore next */ 'EQ';
                        if (!range) {
                            range = { start: new Date(data.metadata.listingDate), end: new Date() };
                        }
                        dateRanges = (0, utils_1.getDateRangeChunks)(range.start, range.end, 66);
                        promises = dateRanges.map(function (dateRange) { return __awaiter(_this, void 0, void 0, function () {
                            var url;
                            return __generator(this, function (_a) {
                                url = "/api/historical/cm/equity?symbol=".concat(encodeURIComponent(symbol.toUpperCase())) +
                                    "&series=[%22".concat(activeSeries, "%22]&from=").concat(dateRange.start, "&to=").concat(dateRange.end);
                                return [2 /*return*/, this.getDataByEndpoint(url)];
                            });
                        }); });
                        return [2 /*return*/, Promise.all(promises)];
                }
            });
        });
    };
    /**
     *
     * @param symbol
     * @returns
     */
    NseIndia.prototype.getEquitySeries = function (symbol) {
        return this.getDataByEndpoint("/api/historical/cm/equity/series?symbol=".concat(encodeURIComponent(symbol
            .toUpperCase())));
    };
    /**
     *
     * @param index
     * @returns
     */
    NseIndia.prototype.getEquityStockIndices = function (index) {
        return this.getDataByEndpoint("/api/equity-stockIndices?index=".concat(encodeURIComponent(index.toUpperCase())));
    };
    /**
     *
     * @param index
     * @param isPreOpenData
     * @returns
     */
    NseIndia.prototype.getIndexIntradayData = function (index, isPreOpenData) {
        if (isPreOpenData === void 0) { isPreOpenData = false; }
        var endpoint = "/api/chart-databyindex?index=".concat(index.toUpperCase(), "&indices=true");
        if (isPreOpenData)
            endpoint += '&preopen=true';
        return this.getDataByEndpoint(endpoint);
    };
    /**
     *
     * @param index
     * @param range
     * @returns
     */
    NseIndia.prototype.getIndexHistoricalData = function (index, range) {
        return __awaiter(this, void 0, void 0, function () {
            var dateRanges, promises;
            var _this = this;
            return __generator(this, function (_a) {
                dateRanges = (0, utils_1.getDateRangeChunks)(range.start, range.end, 66);
                promises = dateRanges.map(function (dateRange) { return __awaiter(_this, void 0, void 0, function () {
                    var url;
                    return __generator(this, function (_a) {
                        url = "/api/historical/indicesHistory?indexType=".concat(encodeURIComponent(index.toUpperCase())) +
                            "&from=".concat(dateRange.start, "&to=").concat(dateRange.end);
                        return [2 /*return*/, this.getDataByEndpoint(url)];
                    });
                }); });
                return [2 /*return*/, Promise.all(promises)];
            });
        });
    };
    return NseIndia;
}());
exports.NseIndia = NseIndia;
//# sourceMappingURL=index.js.map