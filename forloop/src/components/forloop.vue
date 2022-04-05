<template>
    <div>
        <h1>AFCI Formation</h1>
        <h3>For Loop</h3>
        <table border="1">
            <tr>
                <th>No</th>
                <th>Nom</th>
                <th>Adresse</th>
                <th>Email</th>
            </tr>
            <tr v-for="employee in employees" :key="employee.id">
                <td>{{employee.id}}</td>
                <td>{{employee.nom}}</td>
                <td>{{employee.adresse}}</td>
                <td>{{employee.email}}</td>
            </tr>
        </table>
    </div>
</template>
<script>

export default {
    name:'forloop',
    data()
    {
        return{
            employees:[
                {id:1,nom:'Abdul',adresse:'Paris',email:'abdul@test.com'},
                {id:2,nom:'Mohammed',adresse:'Paris',email:'mohammed@test.com'},
                {id:3,nom:'Simo',adresse:'Paris',email:'simo@test.com'},
                {id:4,nom:'Felten',adresse:'Paris',email:'felten@test.com'},
                {id:5,nom:'Rophel',adresse:'Paris',email:'rophel@test.com'},
                {id:6,nom:'Thicot',adresse:'Paris',email:'thicot@test.com'},
                {id:7,nom:'Brandon',adresse:'Paris',email:'brandon@test.com'},
            ]
        }
    }
}
</script>
<style scoped>
table
{
    width: 900px;
}
</style>
