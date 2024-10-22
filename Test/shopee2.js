const str = '()(())(((()()))'.split('')
let max = 0
const arr=[]
str.forEach((i)=>{
    if(i==='('){
        arr.push(i)
    }
    if(i===')'){
        max=max>arr.length?max:arr.length
        arr.pop()
    }
})
console.log(max)