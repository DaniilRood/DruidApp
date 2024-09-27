<template>
    <tbody>
            <tr 
                class="border-bottom"
                v-for="subject in subjects" :key="subject.id"
            >
                <td class="q-pa-md text-center">
                    {{ subject.object.fullname.first_name }}
                </td>
                <td class="q-pa-md text-center">
                    {{ subject.object.fullname.last_name }}
                </td>
                <td class="q-pa-md text-center">
                    <div 
                        v-for="group in subject.group"
                        :key="group.id"
                    >
                        {{ group.name }}
                    </div>
            </td>
        </tr>
    </tbody>
</template>

<script setup>
const { subjects } = defineProps({
    subjects: Array,
});
</script>