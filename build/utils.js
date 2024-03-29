"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSchema = exports.sleep = exports.getDateRangeChunks = void 0;
var moment_range_1 = require("moment-range");
var Moment = __importStar(require("moment"));
var moment = (0, moment_range_1.extendMoment)(Moment);
/**
 * @private
 */
var getDateRangeChunks = function (startDate, endDate, chunkInDays) {
    var range = moment.range(startDate, endDate);
    var chunks = Array.from(range.by('days', { step: chunkInDays }));
    var dateRanges = [];
    for (var i = 0; i < chunks.length; i++) {
        dateRanges.push({
            start: i > 0 ? chunks[i].add(1, 'day').format('DD-MM-YYYY') : chunks[i].format('DD-MM-YYYY'),
            end: chunks[i + 1] ? chunks[i + 1].format('DD-MM-YYYY') : range.end.format('DD-MM-YYYY')
        });
    }
    return dateRanges;
};
exports.getDateRangeChunks = getDateRangeChunks;
/**
 * @private
 */
var sleep = function (ms) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('');
        }, ms);
    });
};
exports.sleep = sleep;
/**
 * @private
 * @param obj
 * @returns
 */
var getDataSchema = function (data, isTypeStrict) {
    if (isTypeStrict === void 0) { isTypeStrict = true; }
    if (typeof data !== 'object')
        return isTypeStrict ? "".concat(typeof data) : 'any';
    if (Array.isArray(data) && typeof data[0] !== 'object') {
        return isTypeStrict ? "".concat(typeof data[0], "[]") : 'any';
    }
    return Object.entries(data).map(function (_a) {
        var _b, _c;
        var key = _a[0], value = _a[1];
        if (Moment.isDate(value))
            return "".concat(key, ": ").concat(isTypeStrict ? 'Date' : 'any');
        if (value === null || typeof value === 'string')
            return "".concat(key, ": ").concat(isTypeStrict ? 'string | null' : 'any');
        if (typeof value !== 'string' && Array.isArray(value)) {
            var typeForEmpty = isTypeStrict ? [] : 'any';
            return _b = {},
                _b["".concat(key)] = value.length ? (0, exports.getDataSchema)(value[0], isTypeStrict) : typeForEmpty,
                _b;
        }
        if (typeof value === 'object') {
            return _c = {},
                _c["".concat(key)] = (0, exports.getDataSchema)(value, isTypeStrict),
                _c;
        }
        return "".concat(key, ": ").concat(isTypeStrict ? typeof value : 'any');
    });
};
exports.getDataSchema = getDataSchema;
//# sourceMappingURL=utils.js.map