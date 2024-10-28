<template>
    <div>
        <ul>
            <li><a href="">001</a></li>
            <li><a href="">002</a></li>
            <li><a href="">003</a></li>
            <li>a:{{ a }}</li>
            <li>b:{{ b }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props:['a','b']
}
</script>

<style></style>