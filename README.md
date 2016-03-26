# multipad
### pad any text to the left, right, or center

``` javascript
var pad = require('multipad');

pad.right('hello', 10, '*'); // 'hello*****'

pad.left('hello', 10, '*'); // '*****hello'

pad.center('hello', 10, '*'); // '***hello**'

pad.center('hello', 11, '*'); // '***hello***'
```
