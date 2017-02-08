# browser-map-object
Cross browser object map function (ES5 compatible)

#### Why ?
I wanted a browser friendly solution, ES5 compatible, immutable, and with an API closer enough to `Array.prototype.map`.

## Install
- Via Bower   
`$ bower install browser-map-object --save`     
- Via HTML  
`<script src="https://raw.githubusercontent.com/juliomatcom/browser-map-object/master/index.js"></script>`

## Usage
```javascript
objectMap({ a: 1, b: [2, 3]}, function (value, key, object) {
   return value + 1;
}, { deep: true });
// { a: 1, b: [3, 4] }
```

## API
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
