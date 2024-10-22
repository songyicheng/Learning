<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group appear name="hello">
            <h2 v-show="isShow" key="1">Hello!</h2>
            <h2 v-show="!isShow" key="2">Hi!</h2>
        </transition-group>
    </div>
</template>

<script>
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

/* 进入的起点、离开的终点 */
.hello-enter,
.hello-leave-to {
    transform: translateX(-100%);
}

.hello-enter-active,
.hello-leave-active {
    transition: 0.5s linear;
}

/* 进入的终点、离开的起点 */
.hello-enter-to,
.hello-leave {
    transform: translateX(0);
}
</style>