
<template>
    <div id="input">
        <h1>Welcome to ToDoList</h1>
        <input type="input" v-model="username" placeholder="请输入姓名">
        <button @click="start">开始使用按钮</button>
    </div>
</template>

<script>
export default {
    name: "input",
    data: function(){
        return {
            username:""
        }
    },
    methods:{
        start: function(){
            //编程式导航
            this.$router.push('/Home/'+this. username)
        }
    }
}
</script>