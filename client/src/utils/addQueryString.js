import qs from 'querystring'

export default function addQueryString(currentSearchString, key, value) {
    let queries = qs.parse(currentSearchString.replace('?', ''))
    if (String(value).trim() === "") delete queries[key]
    else queries[key] = String(value)
    return qs.stringify(queries)
}
