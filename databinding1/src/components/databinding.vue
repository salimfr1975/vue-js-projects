<template>
    <div>
        <h1> {{name | Ucase}}</h1>
        <h3>{{amount|currencyConverter}}</h3>

       

       
     
        
    </div>
</template>
<script>

export default
{
    name:'databinding',
    data(){
        return{
           name:'salim',
           amount:100
        }
    }
}
</script>

<style scoped>
table
{
    width:500px;
    background-color: lightblue;
}
.abc
{
    background-color: blue;
    color:red
}
</style>