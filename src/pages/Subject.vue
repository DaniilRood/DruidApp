<template>
    <Table 
        :title="getName()"
        :groups="subject?.get_subject?.group"
        :information="[
            { name:getName() },
            { name:subject?.get_subject?.email?.email }
        ]"
    />
</template>
<script setup>
import Table from "src/components/SubjectTable.vue"
import { getSubject } from "src/graphql/queries/queries";
import { useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.params.id;

const { result: subject } = useQuery(getSubject, {
    id: id
});
const getName = () => {
    const fullname = subject.value?.get_subject?.fullname;
    console.log(subject.value?.get_subject?.group.object.name);
    
    return (
        fullname?.first_name + ' ' + fullname?.last_name
    )
}
</script>
<style lang="scss" scoped>
</style>