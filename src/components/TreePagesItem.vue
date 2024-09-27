<template>
    <q-item class="q-pl-none column">
        <router-link :to="{name: 'page', params: { id: page.id }}">
            <q-item
            clickable
            class="cursor-pointer rounded-borders q-pa-sm flex items-center"
        >
        <div>
            <q-icon
            @click.prevent="toggleShowChildrens"
            class="icon text-h6"
            v-if="isSubjects || isChildrens"
            :name="arrowType"
            />

            <q-icon 
                v-if="page.icon" 
                :name="page.icon" />
            {{ page.title }}
        </div>
        </q-item>
        </router-link>

    <q-item-section
        class="ml-md" 
        v-if="(isSubjects || isChildrens) && showChildrens">
        <SubjectList v-if="isSubjects" :subjects="subjects.get_group.subject" />
        <TreePages v-if="isChildrens" :pages="page.children?.data" class="child-pages" />
    </q-item-section>
    </q-item>
</template>
<script setup>
import { computed, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import { getGroupSubjects } from "src/graphql/queries/queries";
import TreePages from "./TreePages.vue";
import SubjectList from "./SubjectList.vue";

const { page } = defineProps({
    page: Object,
});

const { result: subjects } = useQuery(getGroupSubjects, {
    group_id: page?.object?.id,
});

const arrowType = ref("keyboard_arrow_right");
const showChildrens = ref(false);

const isSubjects = computed(() => subjects.value?.get_group.subject.length);
const isChildrens = computed(() => page.children?.data.length);

const toggleShowChildrens = () => {
    showChildrens.value = !showChildrens.value;
    arrowType.value = showChildrens.value
    ? "keyboard_arrow_down"
    : "keyboard_arrow_right";
};

// const  routeName = () => {
//     if (page.object?.type_id === subjects.value?.get_group.type_id)
//     return "group";
//     else return "page";
// }
</script>
<style lang="scss">
    a {
        text-decoration: none;
        color: purple
    }

    .child-pages {
        margin-left: 50px;
    }
</style>