nums = [2, 2, 1, 1, 1, 2, 2]
let res = 0
const count = new Map()
nums.forEach((i) => {
    count.set(i, (count.get(i) || 0) + 1)
})
let max =0
for(const [key,value] of count){
       if(value>=max){
            res=key
            max=value
        }
}
console.log(count);
let arr =Array.from(count)
arr.sort((a,b)=>{
    return a[1]-b[1]
})
console.log(arr);
