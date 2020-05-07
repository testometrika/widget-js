# widget-js
Widgets for websites from testometrika.com. Widgets online tests.

1.Installation
-----------------------------------

#### Load from CDN
Put this script tag to the \<head\> of your page once
```html
<script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/@testometrika/widget@1/index.min.js"></script>
```

#### Install through NPM
```html
npm i @testometrika/widget --save
```

2.Initialization
-----------------------------------
#### Auto initialization
```html
<div class="testometrika_widget" id="REPLACE_KEY"></div>
```

#### Manual initialization
Install through NPM
```html
import testometrika_widget from '@testometrika/widget';
testometrika_widget.Test({key: 'REPLACE_KEY'});

<!--widget-->
<div id="REPLACE_KEY"></div>

```

Load from CDN
```html
<script async type="text/javascript" src="https://cdn.jsdelivr.net/npm/@testometrika/widget@1/index.min.js"></script>

<!--widget-->
<div id="REPLACE_KEY"></div>
<script>
    window.onload = function() {
        testometrika_widget.Test({key: 'REPLACE_KEY'});
    }
</script>
```
3.Configuration
-----------------------------------
Coming soon...
