let num =6
let str=''
let even =0
while(str.length<num){
    str=str+even
    even+=2
}
console.log(parseInt(str[num-1]))