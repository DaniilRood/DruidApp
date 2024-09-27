<template>
    <q-header elevated>
    <q-toolbar>
    <q-btn
        flat
        dense
        round
        icon="menu"
        aria-label="Menu"
        @click="toggleLeftDrawer"
    />
    
    </q-toolbar>
        <div class="q-px-lg q-pt-xl q-mb-md">
            <div class="text-h3">Druid App</div>
            <div class="text-subtitle">{{ todaysDate }}</div>
        </div>        
    </q-header>
</template>

<script setup>
import { computed } from 'vue';
import { date } from 'quasar';

const emit = defineEmits(['toggleLeftDrawer'])

const todaysDate = computed(() => {
    const timeStamp = Date.now();
    return date.formatDate(timeStamp, "dddd D MMMM");
});

function toggleLeftDrawer () {
    emit('toggleLeftDrawer')
}
</script>
