<template>
    <div>
        <banner></banner>
        <div>
            <router-link replace active-class='active' to="/about">About</router-link>
            <router-link active-class='active' to="/hello">Hello</router-link>
        </div>
        <div class="panel">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Banner from './components/Banner.vue';

// import About from './pages/About.vue';
// import Hello from './pages/Hello.vue';
export default {
    name: 'App',
    components: {Banner},
}
</script>
<style>
    a {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin-left: 5px;
        border: 1px solid black;
        line-height: 50px;
        text-decoration: none;
        text-align: center;
        color: black;
    }
    .active {
        background-color: blue;
        color: white;
    }
    .panel {
        width: 200px;
        height: 100px;
        margin-top: 10px;
        margin-left: 5px;
    }
</style>