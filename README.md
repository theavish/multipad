# multipad
### pad any text to the left, right, or center

#### to install: `npm install multipad`

[check it out on npm](https://www.npmjs.com/package/multipad)

``` javascript
var pad = require('multipad');

pad.right('hello', 10, '*'); // 'hello*****'

pad.left('hello', 10, '*'); // '*****hello'

pad.center('hello', 10, '*'); // '***hello**'

pad.center('hello', 11, '*'); // '***hello***'
```
