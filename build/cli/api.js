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
exports.showHistorical = exports.showEquityDetails = exports.showMarketStatus = exports.showIndexDetails = exports.showIndexOverview = void 0;
var index_1 = require("../index");
var ora_1 = __importDefault(require("ora"));
var chalk_1 = __importDefault(require("chalk"));
var ohlc_1 = __importDefault(require("ohlc"));
var moment_1 = __importDefault(require("moment"));
var asciichart_1 = __importDefault(require("asciichart"));
var rupee = '₹';
var nse = new index_1.NseIndia();
function showIndexOverview() {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, allIndexData, indexTypes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spinner = (0, ora_1.default)();
                    spinner.text = 'Loading Indices deatils';
                    spinner.start();
                    return [4 /*yield*/, nse.getDataByEndpoint(index_1.ApiList.ALL_INDICES)];
                case 1:
                    allIndexData = (_a.sent()).data;
                    spinner.text = '';
                    spinner.stop();
                    indexTypes = [
                        'BROAD MARKET INDICES',
                        'SECTORAL INDICES',
                        // 'STRATEGY INDICES',
                        // 'THEMATIC INDICES',
                        // 'FIXED INCOME INDICES'
                    ];
                    indexTypes.forEach(function (indexType) {
                        var allIndexTableData = allIndexData
                            .filter(function (item) { return item.key === indexType; })
                            .map(function (item) {
                            return {
                                // 'Index Name': item.index,
                                'Index Symbol': item.indexSymbol,
                                'Last Price': item.last,
                                'Previous Close': item.previousClose,
                                'Change': item.variation,
                                'Change Percent': item.percentChange,
                                'Open': item.open,
                                'High': item.high,
                                'Low': item.low,
                            };
                        });
                        console.log("".concat(indexType, " Details"));
                        console.table(allIndexTableData);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
exports.showIndexOverview = showIndexOverview;
function showIndexDetails(argv) {
    return __awaiter(this, void 0, void 0, function () {
        var index, spinner, data, indexTableData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    index = argv.indexSymbol;
                    spinner = (0, ora_1.default)();
                    spinner.text = "Loading ".concat(index, " Details");
                    spinner.start();
                    return [4 /*yield*/, nse.getEquityStockIndices(index)];
                case 1:
                    data = (_a.sent()).data;
                    spinner.text = '';
                    spinner.stop();
                    if (data) {
                        indexTableData = data.map(function (item) {
                            return {
                                'Symbol': item.symbol,
                                'Open': item.open,
                                'High': item.dayHigh,
                                'Low': item.dayLow,
                                'Last Price': item.lastPrice,
                                'Previous Close': item.previousClose,
                                'Change': Number(item.change.toFixed(2)),
                                'Change Percent': item.pChange
                            };
                        });
                        console.log("".concat(index, " deatils"));
                        console.table(indexTableData);
                    }
                    else {
                        console.log(chalk_1.default.red("".concat(index, " index symbol is invalid. Try to enclose the index symbols with quotes.")));
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.showIndexDetails = showIndexDetails;
function showMarketStatus() {
    return __awaiter(this, void 0, void 0, function () {
        var spinner, marketState;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    spinner = (0, ora_1.default)();
                    spinner.text = 'Loading Market status';
                    spinner.start();
                    return [4 /*yield*/, nse.getDataByEndpoint(index_1.ApiList.MARKET_STATUS)];
                case 1:
                    marketState = (_a.sent()).marketState;
                    spinner.text = '';
                    spinner.stop();
                    console.table(marketState);
                    return [2 /*return*/];
            }
        });
    });
}
exports.showMarketStatus = showMarketStatus;
function showEquityDetails(argv) {
    return __awaiter(this, void 0, void 0, function () {
        var symbol, spinner, _a, info, priceInfo, metadata, securityInfo, marketDeptOrderBook, tradeInfo, changePrice, changePercent, tableData, changeStatus, derivativeStatus, slbStatus, ltpStatus, error_1;
        var _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    symbol = argv.symbol;
                    spinner = (0, ora_1.default)();
                    spinner.text = 'Loading Equity details';
                    spinner.start();
                    _c.label = 1;
                case 1:
                    _c.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, nse.getEquityDetails(symbol)];
                case 2:
                    _a = _c.sent(), info = _a.info, priceInfo = _a.priceInfo, metadata = _a.metadata, securityInfo = _a.securityInfo;
                    spinner.text = 'Loading Trading details';
                    return [4 /*yield*/, nse.getEquityTradeInfo(symbol)];
                case 3:
                    marketDeptOrderBook = (_c.sent()).marketDeptOrderBook;
                    spinner.text = '';
                    spinner.stop();
                    if (info && marketDeptOrderBook) {
                        tradeInfo = marketDeptOrderBook.tradeInfo;
                        changePrice = Number(priceInfo.change.toFixed(2));
                        changePercent = Number(priceInfo.pChange.toFixed(2));
                        tableData = (_b = {
                                'Last Updated Time': metadata.lastUpdateTime,
                                'Symbol': symbol,
                                'Company Name': info.companyName,
                                'Industry': metadata.industry,
                                'Sectoral Index': metadata.pdSectorInd.trim(),
                                'Sectoral PE': metadata.pdSectorPe,
                                'Symbol PE': metadata.pdSymbolPe,
                                'Listing Status': metadata.status,
                                'Listing Since': metadata.listingDate
                            },
                            _b["Price Change (in ".concat(rupee, ")")] = changePrice,
                            _b['Change Percentage (in %)'] = changePercent,
                            _b['Open'] = priceInfo.open,
                            _b['High'] = priceInfo.intraDayHighLow.max,
                            _b['Low'] = priceInfo.intraDayHighLow.min,
                            _b['Close'] = priceInfo.close,
                            _b['Previous Close'] = priceInfo.previousClose,
                            _b['Last Traded Price'] = priceInfo.lastPrice,
                            _b['Volume Weighted Average Price (VWAP)'] = priceInfo.vwap,
                            _b['Total Traded Volume'] = tradeInfo.totalTradedVolume,
                            _b["Total Traded Value (".concat(rupee, " Lakhs)")] = tradeInfo.totalTradedValue,
                            _b["Total Market Capital (".concat(rupee, " Lakhs)")] = tradeInfo.totalMarketCap,
                            _b);
                        changeStatus = changePrice <= 0 ? "".concat(rupee).concat(changePrice, " (").concat(changePercent, "%)").concat(chalk_1.default.red('▼')) :
                            "".concat(rupee).concat(changePrice, " (").concat(changePercent, "%)").concat(chalk_1.default.green('▲'));
                        derivativeStatus = securityInfo.derivatives === 'Yes' ?
                            chalk_1.default.black.bgGreen(' Derivatives ') : chalk_1.default.black.bgRed(' Derivatives ');
                        slbStatus = securityInfo.slb === 'Yes' ?
                            chalk_1.default.black.bgGreen(' SLB ') : chalk_1.default.black.bgRed(' SLB ');
                        ltpStatus = changePrice <= 0 ? chalk_1.default.black.bgRed(" LTP: ".concat(priceInfo.lastPrice, " ")) :
                            chalk_1.default.black.bgGreen(" LTP: ".concat(priceInfo.lastPrice, " "));
                        console.table(tableData);
                        console.log("Change: ".concat(changeStatus));
                        console.log("".concat(ltpStatus, " ").concat(derivativeStatus, " ").concat(slbStatus));
                    }
                    else {
                        console.log(chalk_1.default.red('Please provide valid NSE symbol.'));
                    }
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _c.sent();
                    spinner.text = '';
                    spinner.stop();
                    console.log(chalk_1.default.red(error_1.message));
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
exports.showEquityDetails = showEquityDetails;
function showHistorical(argv) {
    return __awaiter(this, void 0, void 0, function () {
        var symbol, spinner, startDate, results, ohlcData, fullOhlcData, ohlcDataFromStartDate, CloseData, Volume, chartConfig;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.time('Done In');
                    symbol = argv.symbol;
                    spinner = (0, ora_1.default)();
                    spinner.text = 'Loading Historical Data';
                    spinner.start();
                    startDate = (0, moment_1.default)().subtract(3, 'months').format('YYYY-MM-DD');
                    return [4 /*yield*/, nse.getEquityHistoricalData(symbol, { start: new Date(startDate), end: new Date() })];
                case 1:
                    results = _a.sent();
                    spinner.text = '';
                    spinner.stop();
                    ohlcData = [];
                    results.forEach(function (_a) {
                        var historicalData = _a.data;
                        historicalData.forEach(function (info) {
                            ohlcData.push([
                                info.CH_TIMESTAMP,
                                info.CH_OPENING_PRICE,
                                info.CH_TRADE_HIGH_PRICE,
                                info.CH_TRADE_LOW_PRICE,
                                info.CH_CLOSING_PRICE,
                                info.CH_TOT_TRADED_VAL
                            ]);
                        });
                    });
                    fullOhlcData = (0, ohlc_1.default)(ohlcData);
                    console.log();
                    ohlcDataFromStartDate = fullOhlcData.start(startDate).sma(5).toDaily();
                    CloseData = ohlcDataFromStartDate.map(function (obj) { return obj.Close; });
                    Volume = ohlcDataFromStartDate.map(function (obj) { return obj.Volume / 100000; });
                    chartConfig = {
                        height: 10
                    };
                    console.log(chalk_1.default.black.bgCyan(' Price Chart - SMA5 (Last 3 months) '));
                    console.log();
                    console.log(asciichart_1.default.plot(CloseData, __assign(__assign({}, chartConfig), { colors: [asciichart_1.default.cyan] })));
                    console.log();
                    console.log(chalk_1.default.black.bgYellow(' Volume Chart - In Lakhs (Last 3 months) '));
                    console.log();
                    console.log(asciichart_1.default.plot(Volume, __assign(__assign({}, chartConfig), { colors: [asciichart_1.default.yellow] })));
                    console.log();
                    console.timeEnd('Done In');
                    return [2 /*return*/];
            }
        });
    });
}
exports.showHistorical = showHistorical;
//# sourceMappingURL=api.js.map