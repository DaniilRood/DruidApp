<template>
    <MainTable 
        :subjects="_subjects" 
        :columnNames="['Имя', 'Фамилия', 'Список групп']"
    />
</template>
<script setup>
import { ref, watch } from 'vue';
import { getPage, getGroupSubjects } from "src/graphql/queries/queries";
import { provideApolloClient, useQuery } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import MainTable from "src/components/MainTable.vue";
import { apolloClient } from 'src/apollo/apollo-client';

provideApolloClient(apolloClient);

const $route = useRoute();

const _page = ref(null);
const _subjects = ref([]); 



watch(
  () => $route.params.id,
  async (id) => {
    if (!id) return;

    const { data: pageData } = await useQuery(getPage, {
      id: id,
    }).refetch();

    _page.value = pageData.page;

    const { data: subjectsData } = await useQuery(getGroupSubjects, {
      group_id: _page.value.object.id,
    }).refetch();

    _subjects.value = subjectsData.get_group.subject;
  },
  { immediate: true }
);


</script>
<style lang="scss" scoped>
</style>