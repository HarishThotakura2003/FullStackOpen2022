const dummy = (blogs) => {
    return 1
  }

const totalLikes =(a) =>{
  let sum =0
  a.forEach((i)=>{sum+=i.likes})
  return sum
}
  
const favoriteBlog = (a) =>{
  const max = Math.max(...a.map(i=>i.likes))
  return a.filter(i => i.likes==max)[0]
}
  module.exports = {
    dummy,totalLikes,favoriteBlog
  }

