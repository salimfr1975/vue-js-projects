<template>
    <div class="homeClass">
        <div class="top">
            <div class="slider">
                <slider/>
            </div>
            <div class="menubar">
                <menubar/>
            </div>
        </div>
        <div >
            <div id="middlepart">
                <div class="leftsidebar">
                    <leftsidebar/>
                </div>
                <div class="bodyClass">
                    <bodycontent/>
                </div>
                
            </div>
            
        </div>
        <div class="footerbar">
            <footerbar/>
        </div>

    </div>
</template>
<script>
import slider from './homecontent/slider.vue'
import menubar from './homecontent/menubar.vue'
import leftsidebar from './homecontent/leftsidebar.vue'
import footerbar from './homecontent/footer.vue'
import bodycontent from './homecontent/body.vue'
export default {
 name:'home',   
 components: {
   slider,
   menubar,
   leftsidebar,
   footerbar,
   bodycontent
  }
}
</script>
<style>
.homeClass{
    background-color: rgb(224, 214, 248);
    height:800px;
    display: block;
}
.leftsidebar
{

    background-color: blue;
    width:150px;
}
.slider{
    height:100px;
    width:100%;
    background-color: bisque;
}
.menubar
{
    height:40px;
    width:100%;
    background-color: rgb(101, 248, 121);
}
.footerbar
{
    height:80px;
    width:100%;
    background-color: rgb(6, 7, 6);
}
#middlepart
{
    display: inline-block;
    width: 100%;
}

.bodyClass
{

    background-color: rgb(172, 172, 204);
    width:600px;
    right: 0px;
    
}
</style>