/* 题目描述
给一非空的单词列表，返回前 k 个出现次数最多的单词。
解答要求时间限制：1000ms, 内存限制：64MB
输入
第一行为一个整数T（1<=T<=1000）,表示有T个单词，接下来是T个单词的输入，最后一行是一个整数k，表示返回需要返回前 k 个出现次数最多的单词
输出
输出k个单词，应该按单词出现频率由高到低排序。如果不同的单词有相同出现频率，按字母顺序排序。
样例
输入样例 1 
6
I
Love
Life
I
Love
Coding
2
输出样例 1
I
Love */

const T=6
const input=['Love','Life','I','Love','Coding','I']
// input.sort((a,b)=>{return b[0]-a[0]})
const k=2
let strmap= {}
input.forEach((i)=>{
    if(!strmap[i]){
        strmap[i]=1
    }
    else{
        strmap[i]++
    }
})

const sortedWords = Object.keys(strmap).sort((a, b) => {
    if (strmap[b] === strmap[a]) {
        return a.localeCompare(b);     // 频率相同按字母顺序排列
    } else {
        return strmap[b] - strmap[a]; // 按频率降序排列
    }
});
console.log(sortedWords.slice(0, k));