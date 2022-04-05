<template>
    <div>
        <h1>AFCI Formation</h1>
        <h3>Data Binding</h3>
        <div>
            <div>
                <input type="text" v-model="message">
            </div>
            <div>
                <h1>{{message}}</h1>
            </div>

        </div>
        
        
        
         

    </div>
</template>
<script>

export default {
    name:'databinding',
    data()
    {
        return{
            message:'Hi'
        }
    }
    
}
</script>

