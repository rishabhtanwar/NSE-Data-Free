import { DateRange, IntradayData, EquityDetails, EquityTradeInfo, EquityHistoricalData, SeriesData, IndexDetails, IndexHistoricalData } from './interface';
export declare enum ApiList {
    GLOSSARY = "/api/cmsContent?url=/glossary",
    HOLIDAY_TRADING = "/api/holiday-master?type=trading",
    HOLIDAY_CLEARING = "/api/holiday-master?type=clearing",
    MARKET_STATUS = "/api/marketStatus",
    MARKET_TURNOVER = "/api/market-turnover",
    ALL_INDICES = "/api/allIndices",
    INDEX_NAMES = "/api/index-names",
    CIRCULARS = "/api/circulars",
    LATEST_CIRCULARS = "/api/latest-circular",
    EQUITY_MASTER = "/api/equity-master",
    MARKET_DATA_PRE_OPEN = "/api/market-data-pre-open?key=ALL",
    MERGED_DAILY_REPORTS_CAPITAL = "/api/merged-daily-reports?key=favCapital",
    MERGED_DAILY_REPORTS_DERIVATIVES = "/api/merged-daily-reports?key=favDerivatives",
    MERGED_DAILY_REPORTS_DEBT = "/api/merged-daily-reports?key=favDebt"
}
export declare class NseIndia {
    private baseUrl;
    private cookies;
    private userAgent;
    private cookieUsedCount;
    private cookieMaxAge;
    private cookieExpiry;
    private noOfConnections;
    private baseHeaders;
    private getNseCookies;
    /**
     *
     * @param url NSE API's URL
     * @returns JSON data from NSE India
     */
    getData(url: string): Promise<any>;
    /**
     *
     * @param apiEndpoint
     * @returns
     */
    getDataByEndpoint(apiEndpoint: string): Promise<any>;
    /**
     *
     * @returns List of NSE equity symbols
     */
    getAllStockSymbols(): Promise<string[]>;
    /**
     *
     * @param symbol
     * @returns
     */
    getEquityDetails(symbol: string): Promise<EquityDetails>;
    /**
     *
     * @param symbol
     * @returns
     */
    getEquityTradeInfo(symbol: string): Promise<EquityTradeInfo>;
    /**
     *
     * @param symbol
     * @returns
     */
    getEquityCorporateInfo(symbol: string): Promise<any>;
    /**
     *
     * @param symbol
     * @param isPreOpenData
     * @returns
     */
    getEquityIntradayData(symbol: string, isPreOpenData?: boolean): Promise<IntradayData>;
    /**
     *
     * @param symbol
     * @param range
     * @returns
     */
    getEquityHistoricalData(symbol: string, range?: DateRange): Promise<EquityHistoricalData[]>;
    /**
     *
     * @param symbol
     * @returns
     */
    getEquitySeries(symbol: string): Promise<SeriesData>;
    /**
     *
     * @param index
     * @returns
     */
    getEquityStockIndices(index: string): Promise<IndexDetails>;
    /**
     *
     * @param index
     * @param isPreOpenData
     * @returns
     */
    getIndexIntradayData(index: string, isPreOpenData?: boolean): Promise<IntradayData>;
    /**
     *
     * @param index
     * @param range
     * @returns
     */
    getIndexHistoricalData(index: string, range: DateRange): Promise<IndexHistoricalData[]>;
}
//# sourceMappingURL=index.d.ts.map