path.normalize('foo//baz//../bar');//"foo/bar"
path.join('foo/', 'baz/', '../bar'); // => "foo/bar"
path.extname('foo/bar.js'); // => ".js"
