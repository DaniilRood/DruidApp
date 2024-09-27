<template>
    <table class="rounded borders border-black-1">
        <thead class="rounded-borders border-black-1">
            <tr>
                <th
                    v-for="columnName in columnNames"
                    :key="columnName"
                    class="q-pa-md text-center"
                >
                    {{ columnName }}
                </th>
            </tr>
        </thead>
        <MainTableModules v-if="modules" :modules="modules" />
        <MainTableSubjects v-else-if="subjects" :subjects="subjects" />
        <MainTableTask v-else-if="tasks" :tasks="tasks" />
    </table>
</template>
<script setup>
import MainTableTask from '../components/MainTableTask.vue';
import MainTableSubjects from './MainTableSubjects.vue';
import MainTableModules from './MainTableModule.vue';
const { columnNames, subjects, modules, tasks } = defineProps({
    subjects: Array,
    modules: Array,
    tasks: Array,
    columnNames: Array
})
</script>
<style>
.border-bottom {
    border-bottom: 1px solid black;
}
</style>