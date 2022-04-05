<template>
    <div>
        <h1>{{msg1}}</h1>
        <input type="text" v-model="msg1"/>
        </div>
</template>
<script>
export default {
    name:'DataBind',

    
}
methods:{data()
    {
      return{
        message:"hi"
      }
    }}

</script>
