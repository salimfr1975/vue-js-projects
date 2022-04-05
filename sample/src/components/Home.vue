<template>
    <div>
        <h1>{{data}} {{msg}} {{message}}</h1>
        <button v-on:mouseleave="test">Mouse Leave</button>
    </div>
    
  
</template>

<script>

export default {
    name:'Home',
    props:
    {
        data:String,
        msg:String
    },
    methods:
    {
        test()
        {
            alert("Salut, Comment Cava!!!")
        }
    },
    data()
    {
        return{
            message:'hi'
        }
    }
   
}
</script>
