const favoriteBlog = require('../utils/for_testing').favoriteBlog;

const a =[{
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  }]

test('dont know name',()=>{
    const result = favoriteBlog(a)
    expect(result).toBe(a[0])
})