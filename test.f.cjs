const { f } = require('./main.f.cjs')

if (f() !== 'Hello world!') { throw 'no hello' }
