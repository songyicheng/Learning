<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition 
            appear 
            name="animate__animated animate__bounce"
            enter-active-class="animate__bounce"
            leave-active-class="animate__bounceOutUp"
        >
            <h2 v-show="isShow" key="1">Hello!</h2>
        </transition>
    </div>
</template>

<script>
import 'animate.css'
export default {
    name: 'test',
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
h2 {
    background-color: orange;
    text-align: center;
    /*transition: 0.5s linear; */
}
</style>