<template>
    <div class="demo">
        <h2>学校名称：{{ name }}</h2>
        <h2>学校地址：{{ address }}</h2>
        <button @click="showName">显示</button>
    </div>
</template>

<script>
    export default {
        name:'MySchool',
        data() {
            return {
                name: 'bilibili',
                address: 'www.bilibili.com'
            }
        },
        methods: {
            showName() {
                alert(this.name)
            }
        },
    }
</script>

<style>
    .demo {
        background-color: orange;
    }
</style>