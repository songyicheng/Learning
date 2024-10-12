// 问题：数组中相邻两数进行任意次取反操作，求可得到的数组之和的最大值
// 思路：数组中存在奇数个负数时（操作后剩下一个负数）：绝对值之和减2倍最小值；
//       数组中存在偶数个负数时（操作后不存在负数）：绝对值之和；
const evenarr = [-4, -3, 2, -5, 1, 0, -1, 8]
const oddarr = [-4, -3, 2, 1, 0, -1, 8]
const solve = (arr) => {
    let res = arr.reduce((pre, cur) => {
        return Math.abs(pre) + Math.abs(cur)
    })
    let neg = 0
    let min = Math.abs(arr[0])
    arr.forEach(element => {
        if (element < 0) { neg++ }
        min = Math.min(min, Math.abs(element))
    });

    return neg % 2 == 0 ? res : res - 2 * min
}
console.log(solve(evenarr))
console.log(solve(oddarr))