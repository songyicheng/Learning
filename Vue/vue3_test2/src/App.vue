<template>
  <h1>这是一个 Vue3 项目！</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ info.age }}</h2>
  <h2>性别：{{ info.sex }}</h2>
  <button @click="sayHello">提示</button>
  <button @click="changeInfo">修改</button>
</template>

<script>
import { h } from 'vue'
import { ref,reactive } from 'vue'
export default {
  name: 'App',
  setup() {
    let name = ref('abc')
    let info = reactive({
      age:25,
      sex:'男'
    })
    function sayHello() {
      alert(`Hello, my name is ${name.value}!`)
    }

    function changeInfo() {
      name.value = 'def'
      info.age=18
      info.sex='女'
    }
    // 返回一个对象
    return {
      name,
      sayHello,
      changeInfo,
      info
    }

    // 返回一个渲染函数
    // return ()=>h('h1','Vue3')
  }
}
</script>

<style></style>