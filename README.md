# browser-object-map
Cross browser object map function (ES5 compatible)  

[![Bower](https://camo.githubusercontent.com/06c5d22b7908c0c4928071ac314e75c3da29d750/687474703a2f2f62656e7363687761727a2e6769746875622e696f2f626f7765722d6261646765732f62616467654032782e706e67)](https://github.com/juliomatcom/browser-object-map#install)

#### Why ?
I wanted a browser friendly solution, ES5 compatible, immutable, and with an API closer enough to `Array.prototype.map`.

## Install
- Via **Bower**   
`$ bower install browser-object-map --save`     
- Via **HTML**  
`<script src="https://raw.githubusercontent.com/juliomatcom/browser-object-map/master/index.js"></script>`

### Usage
```javascript
objectMap({ a: 1, b: [2, 3]}, function (value, key, object) {
   return value + 1;
}, { deep: true });
// { a: 2, b: [3, 4] }
```

Note: It **does not** return always an `array`, if argument is `object`, it will return an `object`

### API
```javascript
objectMap(source, callback, [options]);
```
- `source`  
  Type *Object*   
  Source object to copy properties

- `callback`  
  Type *Function*   
  Mapping function

  Signature: `(sourceKey, sourceValue, source)`.

- `options`   
  Type *Object*

  Optional parameters
  - `deep`  
  Type *Boolean*  
  Recurse nested objects and arrays.
  
### Browser compatibility
- **Feature**:	Basic support
- **Chrome**: 5
- **Firefox (Gecko)**: 4.0 (2.0)
- **Internet Explorer**: 9
- **Opera**: 12
- **Safari**: 5
