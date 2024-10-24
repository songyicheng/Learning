line = '101100101010010011001010111111111111111111111111111111111111111111111111111111111'
let str =''
let num=1
let len=0
let res=[]
while(len+num<=line.length){
    str=line.substr(len,num)
    len=len+num
    num=(num+1)%11
    if(num==0)
        num=1
    res.push(parseInt(str,2))
}
console.log(res.length)
console.log(res)
//console.log(parseInt('100',2))