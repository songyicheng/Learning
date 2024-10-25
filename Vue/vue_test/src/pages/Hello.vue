<template>
    <div>
        <span>这是 Hello 组件！</span>
        <ul>
            <li><router-link to="/hello/news" active-class="active">news</router-link></li>
            <li><router-link to="/hello/message" active-class="active">mes</router-link></li>
        </ul>
        <router-view></router-view>
    </div>

</template>

<script>
export default {
    name: 'Hello',
    data() {
        return {
        }
    },
}
</script>
<style scoped>
li {
    list-style: none;
    float: left;
}
</style>