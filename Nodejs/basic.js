console.log('Hello world!')
// 终端快捷键 Ctrl + j

const arr = [1, 2, 3, 4]
// 数组常用方法
// 1.reduce()
let sum = arr.reduce((pre, cur, index, arr) => { return pre + cur + arr[index] }, -10)
console.log(sum)

// 2.foreach()
let n = 0
arr.forEach((value, index, arr) => {
    if (value < 2 && arr[index]>0) {
        n++
    }
});
console.log(n)

// 3.map()
const newArr = arr.map((value,index,arr)=>{
    return value+arr[index]
})
console.log(newArr)

// 4.filter()
const evenArr = arr.filter((value,index,arr)=>{return value%2==0})
console.log(evenArr)