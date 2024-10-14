<template>
    <div>
        <Student name="Vue" :age="3"/>
    </div>
</template>

<script>
import Student from './components/Student.vue';
export default {
    name:'App',
    components:{Student},
}
</script>