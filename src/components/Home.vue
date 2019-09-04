
<template>
    <div id="Home">
        <button @click="back">返回</button>
        <span>登录用户名：{{username}}</span>
        <div><router-link :to="{name:'MutiTodo'}">Go to Main</router-link></div> 
        <div><router-link :to="{name:'Mine'}">Go to Mine</router-link></div> 
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: "input",
    props:{
        username:String
    },
    methods:{
        back: function(){
            if(confirm("确认返回?")){
                this.$router.push("/");
                }
        }
    }
}
</script>