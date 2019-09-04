<template>
    <div class="input-form">
        <input type="input" v-model="inputtingItem">
        <button @click="handleCreateTodo">Add</button>
    </div>
</template>

<script>
    export default {
        name: "create-form",
        data: function () {
            return {
                inputtingItem: ""
            }
        },
        methods: {
            handleCreateTodo: function () {
                this.$store.commit("createTodo",this.inputtingItem)
            }
        },
         created:function() {
           this.$store.dispatch('createTodos'),
           this.$store.dispatch('updateTodos')
        },
    }
</script>

<style scoped>

</style>
