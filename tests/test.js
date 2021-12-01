const regbToHex = require('../src/functions')

test('check  tests are working', ()=> {
    expect(regbToHex.regbToHex()).toBe(10)
})