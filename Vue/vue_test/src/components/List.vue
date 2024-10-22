<template>
    <section>
        <ul v-show="info.users.length">
            <li v-for="user in info.users" :key="user.login">
                <a :href="user.html_url">
                    <img :src="user.avatar_url" style="width: 50px;">
                </a>
                <span>用户名：{{ user.login }}</span>
            </li>
        </ul>
        <h1 v-show="info.isFirst">欢迎使用！</h1>
        <h1 v-show="info.isLoading">加载中...</h1>
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </section>

</template>

<script>
export default {
    name: 'List',
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: [],
            }

        }
    },
    mounted() {
        this.$bus.$on('getUsers', (dataObj) => {
            console.log('List 接收到数据')
            this.info = {...this.info,...dataObj}
        })
    }
}
</script>

<style>
li {
    margin-top: 5px;
    padding: 10px 0;
}
</style>