<template>
    <div class="tabs-content" v-show="title == selectedTitle">
        <slot />
    </div>
</template>

<script>
// import { Title } from 'chart.js';
import {inject} from 'vue'

export default {
    props:['title'],
    setup(){
        const selectedTitle = inject('selectedTitle')

        return {
            selectedTitle
        }
    }
    
}
</script>

<style scoped>
    .tabs-content{
        display: flex;
        border: 1px solid var(--color-border);
        border-top: none;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        padding: 5px 15px;
        background-color: var(--color-background-soft);
    }
</style>