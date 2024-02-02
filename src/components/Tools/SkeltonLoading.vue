<template>
    <div class="skelton_main">
        <div class="skelton_title">
            <span />
        </div>
        <div class="skelton_content">
            <span />
            <h3 />
        </div>
    </div>
</template>

<script setup>
    defineProps({
        height: {
            type:Script,
        },
        width: {
            type:Script,
        },
        
    });
</script>

<style scoped>
    @keyframes bgAnimate {
        0%{
            background-position: 50% 0;
        }

        100%{
            background-position: -150% 0;
        }
    }
    .skelton_main{
        height: v-bind(height);
        width: v-bind(width);
        animation: bgAnimate 1.2s linear infinite;
    }
    .skelton_title{
        width: 100%;
        padding: 1rem 0;
        background-color: var(--color-background-mute);
        height: 24px;
        display: block;
    }

    .skelton_content{
        width: 80%;
        padding: 1rem;
        background-color: var(--color-background-mute);
        height: 18px;
        display: block;
    }
</style>