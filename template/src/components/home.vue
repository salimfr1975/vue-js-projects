<template>
    <div>
        <h1>Login</h1>
        <p v-if="error.length">
            <b>merci de corriger l'erreur suivante</b>
            <ul style="list-style-type:none">
            <li v-for="item in error" v-bind:key="item.id">
                {{item}}
            </li>
            </ul>
        </p>
        <p v-if="noerror.length">
            <ul style="list-style-type:none">
        <li v-for="item in noerror" v-bind:key="item.id">
            {{item}}
        </li>
            </ul>
  
        </p>
        <form @submit="login">
    <input type="text" placeholder="Entrez votre nom"
     v-model="name"> 
    <br/><br/>
    <input type="password" placeholder="Enter your password"
     v-model="password"> 
    <br/><br/>
    <button type ="submit">Connexion</button>
            
        </form>
    </div>
</template>
<script>
export default {
    name:'home',
    data()
    {
        return{
            error:[],
            noerror:[],
            name:null,
            password:null
        }
    },
    methods:{
        login(e)
        {
            this.error=[];
            this.noerror=[];
            if(this.name && this.password)
            {
                
                this.noerror.push("Tu es connecté")
            }
            if(!this.name)
            {
                this.error.push("Nom d'utilisateur 
                est nécessaire")
            }
            if(!this.password)
            {
                this.error.push("Mot de passe requis")
            }
           
            e.preventDefault()
        }
    }
}
</script>
