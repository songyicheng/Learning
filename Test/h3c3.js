const str="font-size"
const arr=str.split('-')
for(let i =1;i<arr.length;i++){
    arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length)
}
console.log(arr.join(''));

