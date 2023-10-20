<template>
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
            <transition name="modal-animation-inner">
                <div v-show="modalActive" class="modal-inner">
                    <font-awesome-icon icon="fa-solid fa-circle-xmark" class="icon" @click="close"/>
                    <!-- Modal Content -->
                    <slot ></slot>
                    <!-- <button @click="close">Close</button> -->
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
export default {
    name:"Modal",
    props: ["modalActive"], 
    setup(props, {emit}){
        const close = () => {
            emit("close");
        }

        return {close}
    }

}
</script>

<style scoped>

.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}

.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-animation-inner-leave-to {
  transform: scale(0.8);
}

    .modal{
        display:flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100vw;
        background-color: var(--color-background-modal);
        
        border:none;
       
        position:fixed;
        top:0;
        left:0;
        z-index: 5;
    }

    .modal-inner{
        display: flex;
        position: absolute;
        background-color: var(--color-background);
        top:0;
        border-radius: 8px;
        margin: 1rem;
        height: 95vh;
        width: 92vw;

    }

    .modal-inner button{
            position: absolute;
            bottom: 0px;
            right: 20px;
            font-size:17px;
            background-color: var(--color-detail1-red);
            color: var(--tema2-text-dark-2);
            border: none;
            border-radius: 8px;
            width: 80px;
            height: 40px;
    }
    
    .modal-inner .icon{
            position: absolute;
            top: -15px;
            right: 0;
            background-color: var(--color-detail1-red);
            color: var(--tema2-text-dark-2);
            border-radius: 50%;
            width: 30px;
            height: 30px;
    }

    @media screen and (max-width: 450px){
        .modal{
            top:50px;
            left:15px;
            width: 95vw;
        }
    }
    
</style>