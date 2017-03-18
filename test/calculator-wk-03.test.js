const test = require('tape')
const main  = require('../scripts/main.js')

test('main.calculate([1, 2]) should equal 3', function(t) {
  const result = main.calculate([1, 2], "+")
  const expected = 3
  t.equal(result, expected)
  t.end()
})
