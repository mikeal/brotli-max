# brotli-max

Compress w/ maximum brotli settings

```
brotli-max <input> [output]

Parse schema file 

Positionals:
  input   Input file
  output  Output file, defaults to input + '.br'

Options:
  --help     Show help                                                 [boolean]
  --version  Show version number       
```

In JS:

```javascript
const max = require('brotli-max')

await max(inputFilename, outputFilename)
await max(inputBuffer, outputFilename)
```

Note that there is no streaming API because knowing the entire file size
is one of the ways we maximize the compression efficiency of Brotli.
