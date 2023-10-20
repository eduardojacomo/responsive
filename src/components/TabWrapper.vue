<template>
    <div class="tabs">
        <ul class="tabs__header">
            <li v-for="title in tabTitles" :key="title" :class="{selected: title == selectedTitle}" @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>

<script>
import {ref, provide} from 'vue'

export default {
    setup(props, {slots}){
        const tabTitles = ref(slots.default().map((tab) => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])

        provide("selectedTitle", selectedTitle)
        return {
            selectedTitle,
            tabTitles,
        }
    }
}
</script>

<style scoped>
    .tabs__header{
        list-style: none;
        display: flex;
        border: 1px solid var(--color-border);
        background-color: var(--color-background-soft);
        /* border-bottom: none; */
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        justify-content: center;
        text-align: center;
        padding: 0 10px;
    }

    .tabs__header li{
        width: 120px;
        text-align: center;
        padding: 10px 20px;
        /* margin-right: 10px; */
        background-color: transparent;
        border-right: 1px solid var(--color-background-soft);
        cursor: pointer;
        transition: 0.4s all ease-out;
    }

    .tabs__header li.selected {
        background-color: var(--color-detail2-blue);
        color: var(--color-text2);
    }
</style>