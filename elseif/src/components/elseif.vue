<template>
    <div>

        <div v-if="disp=='A'">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis non nulla fuga. Omnis reprehenderit dicta aspernatur esse vel doloribus quas laborum recusandae commodi, totam soluta id non aut! Odit et dolore voluptate, pariatur culpa rerum optio expedita nemo, itaque ratione vel. Eos modi accusantium provident ab sapiente atque sit fuga!</p>
        </div>
        <div v-else-if="disp=='B'">
            <div class="tb">
            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Email</th>
                </tr>
                <tr>
                    <td>Abdul</td>
                    <td>Paris</td>
                    <td>abdul@gmail.com</td>

                </tr>
                <tr>
                    <td>Abc</td>
                    <td>Paris</td>
                    <td>abc@gmail.com</td>

                </tr>
            </table>
            </div>
        </div>
        <div v-else-if="disp=='C'">
            <ul>
                <li>France</li>
                <li>Germany</li>
                <li>Spain</li>
                <li>UK</li>
            </ul>
        </div>
        <div v-else>
            <ol>
                <li>Paris</li>
                <li>Lyon</li>
                <li>Nice</li>
                <li>Normandie</li>
            </ol>
        </div>

         
    </div>
    
</template>
<script>

export default {
    name:'elseif',
 
    data()
    {
        return{
            disp:'B',
            
        }
    }
}
</script>


<style>
table
{
    background-color: lightskyblue;
    border-color: red;
    width:500px;
    padding: 25px;
    margin: 20px;
    

}
th
{
    background-color: red;
}
tr
{
    background-color: white;
}
</style>


