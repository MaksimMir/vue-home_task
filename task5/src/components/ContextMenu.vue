<template>
    <v-dialog v-model="init" :style="styles" max-width="200px">
        <v-card>
            <v-card-actions v-for="(item, index) in items" :key="index" @click="onClick(item)">
                {{ item.text }}
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'ContextMenu',
    data() {
        return {
            init: false,
            items: [],
            positionX: 0,
            positionY: 0
        }
    },
    methods: {
        onClick(item) {
            item.actions();
            this.$context.close();
        },
        onShow({items, caller}) {
            this.items = items;
            this.init = true;
            this.setPosition(caller);
        },
        onClose() {
            this.items = [];
            this.init = false;
        },
        setPosition(caller) {
            this.positionX = caller.getBoundingClientRect().left;
            this.positionY = caller.getBoundingClientRect().top;
        }
    },
    computed: {
        styles() {
            return {
              top: `${this.positionY}px`,
              left: `${this.positionX + 100}px`  
            }
        }
    },
    mounted() {
        this.$context.EventBus.$on('init', this.onShow);
        this.$context.EventBus.$on('close', this.onClose);
    },
    beforeDestroy() {
        this.$context.EventBus.$off('init', this.onShow);
        this.$context.EventBus.$off('close', this.onClose);
    },
}
</script>

