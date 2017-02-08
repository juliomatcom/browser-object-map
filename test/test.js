var global = window;

describe('objectMap', function() {
  it('should be defined in global', function() {
    var actual = typeof global.objectMap;
    var expected = 'function';

    chai.assert(actual === expected, 'objectMap is not defined in global');
  });

  it('array argument', function () {
    var actual = global.objectMap([1, 2, 3], function (value, key, obj) {
      return value + 1;
    });
    var expected = [2, 3, 4];

    chai.assert.deepEqual(actual, expected);
  });

  it('object argument', function() {
    var obj = {
      a: 1,
      b: [1, 2, 3],
      c: null,
      d: {
        a: 4
      }
    };
    var opts = { deep: 1 };
    var actual = global.objectMap(obj, function (value, key, obj) {
        return value + '';
      }, opts);
    var expected = {
      a: '1',
      b: ['1', '2', '3'],
      c: 'null',
      d: {
        a: '4'
      }
    };

    chai.assert.deepEqual(actual, expected);
  });

  it('argument', function () {
    var actual = {
      a: [1, 2, 3]
    };
    var opts = { deep: 1 };

    global.objectMap(actual, function (value, key, obj) {
      return value + 1;
    }, opts);
    var expected = {
      a: [1, 2, 3]
    };

    chai.assert.deepEqual(actual, expected, 'argument should not mutate');
  });
});
