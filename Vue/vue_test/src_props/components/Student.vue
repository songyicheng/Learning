<template>
    <div class="demo">
        <h2>{{ msg }}!</h2>
        <h2>学生姓名：{{ name }}</h2>
        <h2>学生年龄：{{ MyAge+1 }}</h2>
        <button @click="addAge">增加年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'这是一个对象',
                MyAge:this.age
            }
        },
        // 简单接收
        // props:['name','age']

        // 接收时限制数据类型
/*         props:{
            name:String,
            age:Number
        } */

        // 接收时限制数据类型、确定必要性和默认值
        props:{
            name:{
                type:String,
                Required:true
            },
            age:{
                type:Number,
                default:99
            }
        },
        methods:{
            addAge(){
                this.MyAge++
            }
        }
    }
</script>