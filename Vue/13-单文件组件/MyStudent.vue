<template>
    <div class="demo">
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ age }}</h2>
    </div>
</template>

<script>
    export default {
        name:'MyStudent',
        data() {
            return {
                name: 'Vue',
                age: 99
            }
        },
    }
</script>

<style>
</style>