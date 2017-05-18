url.parse('http://user:pass@host.com:8080/p/a/t/h?query=string#hash');
/* =>
 { protocol: 'http:',
 auth: 'user:pass',
 host: 'host.com:8080',
 port: '8080',
 hostname: 'host.com',
 hash: '#hash',
 search: '?query=string',
 query: 'query=string',
 pathname: '/p/a/t/h',
 path: '/p/a/t/h?query=string',
 href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash' }
 */

url.format({
    protocol: 'http:',
    host: 'www.example.com',
    pathname: '/p/a/t/h',
    search: 'query=string'
});
/* =>
 'http://www.example.com/p/a/t/h?query=string'
 */

url.resolve('http://www.example.com/foo/bar', '../baz');
/* =>
 http://www.example.com/baz
 */