<template>
    <h1>Services page</h1>
    <h2>{{ count }} and the number is: {{ isEvenorOdd }}</h2>
    <button @click="increment">Increment</button>
    <button @click="decrement">Increment</button>

</template>

<script>
//options API

export default{
    data(){
        return{
            count:0
        }
    },
    computed:{
        isEvenorOdd(){
            if(this.count % 2 === 0) return "Even"
            return "Odd"
        }
    },
    watch: {
        count(newCount, oldCount){
            if(newCount === 10){
            alert("you have reached maximum")
        }
        }
    },
    methods:{
        increment(){
            this.count++
        },decrement(){
            this.count--
        }    
    }
}
</script>