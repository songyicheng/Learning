const str = 'aaaaaa'.split('')
let max = 0
let start = 0
let lastmax = 0
let lastsatrt = 0
str.forEach((i,index,arr)=>{
    if(i===arr[start]){
        max++
    }
    else{
        if(lastmax<max){
            lastmax=max
            lastsatrt=start
        }
        start =index
        max = 1
    }
})
if(max<lastmax){
    max=lastmax
    start=lastsatrt
}
console.log(max+' '+start)