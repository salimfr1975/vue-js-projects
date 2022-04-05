<template>
    <div>
        <h1>If Condition</h1>
        <br/>
        <br/>
        <h1 v-if="show">
            Condition Works
        </h1>
        <h1 class="red1" v-if="red">
            Red Color
        </h1>
        <h1 v-if="green">
            Green Color
        </h1>
        <h1 v-if="blue">
            Blue Color
        </h1>
          <button v-on:click="displayred">1</button>
          <button v-on:click="displaygreen">2</button>
          <button v-on:click="displayblue">3</button>
    </div>
</template>
<script>

export default {
    name:'ifcondition',
    data()
    {
        return {
            show:false,
            red:false,
            green:false,
            blue:false
       
            }
    },
    methods:
    {
        displayred()
        {
            this.red=!this.red
        },
        displaygreen()
        {
            this.green=!this.green
        },
        displayblue()
        {
            this.blue=!this.blue
        }
    }

}
</script>
<style scoped>
.red1
{
    background-color: red;
}
</style>
