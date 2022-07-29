const dummy = require('../utils/for_testing').dummy

test('dummy returns one',()=>{
    const blogs = []
    const result = dummy(blogs)
    expect(result).toBe(1)
})