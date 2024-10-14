<template>
    <div>
        <h2 v-text="msg" ref="title"></h2>
        <button @click="showDOM" ref="btn">输出</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './components/School.vue';
export default {
    name:'App',
    data() {
        return {
            msg:'欢迎学习 Vue!'
        }
    },
    components:{
        School
    },
    methods: {
        showDOM(){
            console.log(this.$refs.title)
            console.log(this.$refs.btn)
            console.log(this.$refs.sch)
        }
    },
}
</script>