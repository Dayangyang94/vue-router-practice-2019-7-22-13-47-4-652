import axios from "axios";
export default {
    strict: true,
    state: {
        todoList: [
            { status: 'completed', content: '吃饭' },
            { status: 'completed', content: '睡觉' },
            { status: 'completed', content: '打豆豆' }
        ],
        currentFilter: 'all'
    },
    //从原数据获取信息
    getters: {
        filteredTodoList: function (state) {
            let filteredTodoList = [];
            for (let i = 0; i < state.todoList.length; i++) {
                if (state.currentFilter === 'all' || state.currentFilter === state.todoList[i].status) {
                    filteredTodoList.push(state.todoList[i])
                }
            }
            return filteredTodoList;
        }
    },
    //修改
    mutations: {
        createTodo: function (state, content) {
            state.todoList.push({
                status: 'active',
                content
            })
        },
        toggleActive: function (state, index) {
            state.todoList[index].status = state.todoList[index].status === 'completed' ? 'active' : 'completed';
        },
        updateCurrentFilter: function (state, currentFilter) {
            state.currentFilter = currentFilter;
        },
        initTodos: function(state,todos){
            state.todoList=todos
        }
    },
    actions: {
        //获取数据
        fetchToDos(context) {
            //请求网络
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.get(url).then(function (response) {
                context.commit("initTodos",response.data)
            }).catch(function (error) {
                console.log(error.response)
            })
        },
        //提交
        createTodos(context){
            //请求网络
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos";
            axios.post(url,{
                content:"玩耍",
                status:"active"
            }).then(function(response){
                context.dispatch("createTodos")
            }).catch(function (error) {
                alert(error.response)
                console.log(error.response)
            }) 
        },
        //更新
         updateTodos(context){
            //请求网络
            const url = "http://5b4dcb2aec112500143a2311.mockapi.io/api/todos/115";
            axios.put(url,{
                id:115,
                content:"玩耍222222222",
                status:"active"
            }).then(function(response){
                context.dispatch("createTodos")
            }).catch(function (error) {
                alert(error.response)
                console.log(error.response)
            }) 
        },
    }
}
