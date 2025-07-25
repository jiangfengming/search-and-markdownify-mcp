export type Params$Resource$Cse$List = {
    /**
     * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
     */
    key?: string;
    /**
     * Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/json_api_reference#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)
     */
    c2coff?: string;
    /**
     * Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/json_api_reference#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/json_api_reference#countryCollections) page for a list of valid values for this parameter.
     */
    cr?: string;
    /**
     * The Programmable Search Engine ID to use for this request.
     */
    cx?: string;
    /**
     * Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
     */
    dateRestrict?: string;
    /**
     * Optional. Enables routing of Programmable Search Engine requests to an alternate search handler.
     */
    enableAlternateSearchHandler?: boolean;
    /**
     * Identifies a phrase that all documents in the search results must contain.
     */
    exactTerms?: string;
    /**
     * Identifies a word or phrase that should not appear in any documents in the search results.
     */
    excludeTerms?: string;
    /**
     * Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).
     */
    fileType?: string;
    /**
     * Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/json_api_reference#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.
     */
    filter?: string;
    /**
     * Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/json_api_reference#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.
     */
    gl?: string;
    /**
     * **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.
     */
    googlehost?: string;
    /**
     * Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    highRange?: string;
    /**
     * Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/json_api_reference#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/json_api_reference#interfaceLanguages) for a list of supported languages.
     */
    hl?: string;
    /**
     * Appends the specified query terms to the query, as if they were combined with a logical AND operator.
     */
    hq?: string;
    /**
     * Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
     */
    imgColorType?: string;
    /**
     * Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
     */
    imgDominantColor?: string;
    /**
     * Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
     */
    imgSize?: string;
    /**
     * Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
     */
    imgType?: string;
    /**
     * Specifies that all search results should contain a link to a particular URL.
     */
    linkSite?: string;
    /**
     * Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
     */
    lowRange?: string;
    /**
     * Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)
     */
    lr?: string;
    /**
     * Number of search results to return. * Valid values are integers between 1 and 10, inclusive.
     */
    num?: number;
    /**
     * Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
     */
    orTerms?: string;
    /**
     * Query
     */
    q?: string;
    /**
     * Deprecated.
     */
    relatedSite?: string;
    /**
     * Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).
     */
    rights?: string;
    /**
     * Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
     */
    safe?: string;
    /**
     * Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
     */
    searchType?: string;
    /**
     * Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).
     */
    siteSearch?: string;
    /**
     * Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
     */
    siteSearchFilter?: string;
    /**
     * Optional. Maximum length of snippet text, in characters, to be returned with results. Note: this feature is limited to specific engines. * Valid values are integers between 161 and 1000, inclusive.
     */
    snippetLength?: number;
    /**
     * The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).
     */
    sort?: string;
    /**
     * The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.
     */
    start?: number;
}

/**
 * A custom search result.
 */
export interface Schema$Result {
    /**
     * Indicates the ID of Google's cached version of the search result.
     */
    cacheId?: string | null;
    /**
     * An abridged version of this search result’s URL, e.g. www.example.com.
     */
    displayLink?: string | null;
    /**
     * The file format of the search result.
     */
    fileFormat?: string | null;
    /**
     * The URL displayed after the snippet for each search result.
     */
    formattedUrl?: string | null;
    /**
     * The HTML-formatted URL displayed after the snippet for each search result.
     */
    htmlFormattedUrl?: string | null;
    /**
     * The snippet of the search result, in HTML.
     */
    htmlSnippet?: string | null;
    /**
     * The title of the search result, in HTML.
     */
    htmlTitle?: string | null;
    /**
     * Image belonging to a custom search result.
     */
    image?: {
        byteSize?: number;
        contextLink?: string;
        height?: number;
        thumbnailHeight?: number;
        thumbnailLink?: string;
        thumbnailWidth?: number;
        width?: number;
    } | null;
    /**
     * A unique identifier for the type of current object. For this API, it is `customsearch#result.`
     */
    kind?: string | null;
    /**
     * Encapsulates all information about refinement labels.
     */
    labels?: Array<{
        displayName?: string;
        label_with_op?: string;
        name?: string;
    }> | null;
    /**
     * The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar.
     */
    link?: string | null;
    /**
     * The MIME type of the search result.
     */
    mime?: string | null;
    /**
     * Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result.
     */
    pagemap?: {
        [key: string]: any;
    } | null;
    /**
     * The snippet of the search result, in plain text.
     */
    snippet?: string | null;
    /**
     * The title of the search result, in plain text.
     */
    title?: string | null;
}

/**
 * Promotion result.
 */
export interface Schema$Promotion {
    /**
     * An array of block objects for this promotion.
     */
    bodyLines?: Array<{
        htmlTitle?: string;
        link?: string;
        title?: string;
        url?: string;
    }> | null;
    /**
     * An abridged version of this search's result URL, e.g. www.example.com.
     */
    displayLink?: string | null;
    /**
     * The title of the promotion, in HTML.
     */
    htmlTitle?: string | null;
    /**
     * Image belonging to a promotion.
     */
    image?: {
        height?: number;
        source?: string;
        width?: number;
    } | null;
    /**
     * The URL of the promotion.
     */
    link?: string | null;
    /**
     * The title of the promotion.
     */
    title?: string | null;
}


/**
 * Response to a custom search request.
 */
export interface Schema$Search {
    /**
     * Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search.
     */
    context?: {
        [key: string]: any;
    } | null;
    /**
     * The current set of custom search results.
     */
    items?: Schema$Result[];
    /**
     * Unique identifier for the type of current object. For this API, it is customsearch#search.
     */
    kind?: string | null;
    /**
     * The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query.
     */
    promotions?: Schema$Promotion[];
    /**
     * Query metadata for the previous, current, and next pages of results.
     */
    queries?: {
        nextPage?: Array<{
            count?: number;
            cr?: string;
            cx?: string;
            dateRestrict?: string;
            disableCnTwTranslation?: string;
            exactTerms?: string;
            excludeTerms?: string;
            fileType?: string;
            filter?: string;
            gl?: string;
            googleHost?: string;
            highRange?: string;
            hl?: string;
            hq?: string;
            imgColorType?: string;
            imgDominantColor?: string;
            imgSize?: string;
            imgType?: string;
            inputEncoding?: string;
            language?: string;
            linkSite?: string;
            lowRange?: string;
            orTerms?: string;
            outputEncoding?: string;
            relatedSite?: string;
            rights?: string;
            safe?: string;
            searchTerms?: string;
            searchType?: string;
            siteSearch?: string;
            siteSearchFilter?: string;
            sort?: string;
            startIndex?: number;
            startPage?: number;
            title?: string;
            totalResults?: string;
        }>;
        previousPage?: Array<{
            count?: number;
            cr?: string;
            cx?: string;
            dateRestrict?: string;
            disableCnTwTranslation?: string;
            exactTerms?: string;
            excludeTerms?: string;
            fileType?: string;
            filter?: string;
            gl?: string;
            googleHost?: string;
            highRange?: string;
            hl?: string;
            hq?: string;
            imgColorType?: string;
            imgDominantColor?: string;
            imgSize?: string;
            imgType?: string;
            inputEncoding?: string;
            language?: string;
            linkSite?: string;
            lowRange?: string;
            orTerms?: string;
            outputEncoding?: string;
            relatedSite?: string;
            rights?: string;
            safe?: string;
            searchTerms?: string;
            searchType?: string;
            siteSearch?: string;
            siteSearchFilter?: string;
            sort?: string;
            startIndex?: number;
            startPage?: number;
            title?: string;
            totalResults?: string;
        }>;
        request?: Array<{
            count?: number;
            cr?: string;
            cx?: string;
            dateRestrict?: string;
            disableCnTwTranslation?: string;
            exactTerms?: string;
            excludeTerms?: string;
            fileType?: string;
            filter?: string;
            gl?: string;
            googleHost?: string;
            highRange?: string;
            hl?: string;
            hq?: string;
            imgColorType?: string;
            imgDominantColor?: string;
            imgSize?: string;
            imgType?: string;
            inputEncoding?: string;
            language?: string;
            linkSite?: string;
            lowRange?: string;
            orTerms?: string;
            outputEncoding?: string;
            relatedSite?: string;
            rights?: string;
            safe?: string;
            searchTerms?: string;
            searchType?: string;
            siteSearch?: string;
            siteSearchFilter?: string;
            sort?: string;
            startIndex?: number;
            startPage?: number;
            title?: string;
            totalResults?: string;
        }>;
    } | null;
    /**
     * Metadata about a search operation.
     */
    searchInformation?: {
        formattedSearchTime?: string;
        formattedTotalResults?: string;
        searchTime?: number;
        totalResults?: string;
    } | null;
    /**
     * Spell correction information for a query.
     */
    spelling?: {
        correctedQuery?: string;
        htmlCorrectedQuery?: string;
    } | null;
    /**
     * OpenSearch template and URL.
     */
    url?: {
        template?: string;
        type?: string;
    } | null;
}
