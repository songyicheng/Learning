<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <!-- <h2 v-show="isShow" :class="action">Hello!</h2> -->
        <transition appear name="hello">
            <h2 v-show="isShow">Hello!</h2>
        </transition>
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
    // computed:{
    //     action(){
    //         return this.isShow?'come':'go'
    //     }
    // }
}
</script>

<style scoped>
h2 {
    background-color: orange;
    text-align: center;
}

/* .come {
    animation: appear 1s;
}

.go {
    animation: appear 1s reverse;
} */

.hello-enter-active {
    animation: appear 1s;
}

.hello-leave-active {
    animation: appear 1s reverse;
}

@keyframes appear {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0px);
    }
}
</style>