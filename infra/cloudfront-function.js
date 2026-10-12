// CloudFront viewer-request function (cloudfront-js-2.0) for biodanzawithcaroline.com
// - Redirects www.biodanzawithcaroline.com to the bare domain
// - Maps directory paths to the index.html files written by `next build` (trailingSlash: true)
function handler(event) {
  var request = event.request;
  var host = request.headers.host && request.headers.host.value;

  if (host && host.indexOf("www.") === 0) {
    var qs = Object.keys(request.querystring)
      .map(function (k) {
        return k + "=" + request.querystring[k].value;
      })
      .join("&");
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: {
          value: "https://" + host.slice(4) + request.uri + (qs ? "?" + qs : ""),
        },
      },
    };
  }

  var uri = request.uri;
  if (uri.endsWith("/")) {
    request.uri = uri + "index.html";
  } else if (uri.lastIndexOf(".") < uri.lastIndexOf("/")) {
    // Extensionless path such as /about -> redirect to /about/ so relative URLs resolve
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: { location: { value: uri + "/" } },
    };
  }

  return request;
}
