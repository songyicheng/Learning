<template>
    <div>
        <MySchool></MySchool>
        <MyStudent/>
    </div>
</template>

<script>
    import MySchool from './MySchool.vue';
    import MyStudent from './MyStudent.vue';
    export default {
        name:'App',
        components:{
            MySchool,
            MyStudent
        }
    }
</script>

<style></style>