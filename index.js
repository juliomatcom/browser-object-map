(function (global) {
  /**
   * objectMap
   * @param  {object}   obj     Source object to iterate
   * @param  {function} fn      Callback function
   * @param  {object}   options Available options
   * @return {object}           New object mapped
   *
   * @example
   * objectMap({ a: 1, b: [2, 3]}, function (value, key, object) {
   *   return value + 1;
   * }, { deep: true });
   * // { a: 1, b: [3, 4] }
   */
  global.objectMap = function objectMap (obj, fn, options) {
    var obj = obj && typeof obj === 'object' ? obj : {};
    var keys = Object.keys(obj);
    var length = keys.length;
    var options = options || {};
    var result = Array.isArray(obj) ? [] : {};
    var i;

    for (i = 0; i < length; i++) {
      result[keys[i]] = options.deep && notEmpty(obj[keys[i]]) ?
        objectMap(obj[keys[i]], fn, options) :
        fn(obj[keys[i]], keys[i], obj);
    }
    return result;
  }

  function notEmpty (obj) {
    return obj && typeof obj === 'object' && Object.keys(obj).length;
  }

})(window);
