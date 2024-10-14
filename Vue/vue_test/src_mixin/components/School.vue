<template>
    <div>
        <h2 @click="showInfo">名称：{{ name }}</h2>
        <h2>地址：{{ address }}</h2>
    </div>
</template>

<script>
    import { mixin } from '../mixin';
    export default {
        name:'School',
        data() {
            return {
                name:'bilibili',
                address:'www.bilibili.com'
            }
        },
        mixins:[mixin]
    }
</script>