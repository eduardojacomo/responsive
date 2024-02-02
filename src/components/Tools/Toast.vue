<script setup>
    const props = defineProps({
            titulo: {
                type: String,
                required: true
            },
            msg: {
                type: String,
                required: true
            },
            icone: {
                type: String,
                required: true
            },
            active:{
                type: Boolean,
                required: true
            }
        });
    
    const toast = document.querySelector(".main_toast"),
          progress =document.querySelector(".progress"); 

</script>

<template>
    <div class="main_toast">
        <div class="toast_content">
            <font-awesome-icon icon="fa-solid fa-check" />
        </div>
        <div class="toast_message">
            <h3>{{ titulo }}</h3>
            <h4>{{ msg }}</h4>
        </div>
        <div class="progress"></div>
    </div>    
</template>

<style scoped>
    .main_toast{
        display: flex;
        position: absolute;
        background-color: var(--color-background-soft);
        box-shadow: 0 5px 10px rgba(0,0,0,0.1);
        border-radius: 12px;
        padding: 12px;
        
        border-left: solid 6px var(--tema-border);
        overflow: hidden;
        width: 280px;
        height: 70px;
    }
   
    .toast_content, .toast_message {
        display: flex;
        
        flex-direction: column;
    }

     .progress{
        position: absolute;
        bottom: 0px;
        left: 0px;
        height: 5px;
        width: 100%;
        /* background-color: var(--color-detail2-green); */
        transition: 0.4s linear;  
        transition-property: width, background-color;    
        animation: teste 4s linear forwards;
    }
    
    /* .progress::before{
       
       position: absolute;
       bottom: 0px;
       
       height: 100%;
       width: 100%;
       background-color: var(--color-detail2-green);
       
    } */

    @keyframes teste {
        100% { width: 100%; background-color: var(--tema-border); }
        0%   { width: 5%; background-color: var(--color-background-soft);}
    }

</style>