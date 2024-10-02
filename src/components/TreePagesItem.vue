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
            v-if="isChildrens"
            :name="arrowType"
            />

            <q-icon 
                v-if="page.icon" 
                :name="page.icon" />
            {{ page.title }}
            <q-icon
                @click="inviteUser"
                v-if="_isGroupPage"
                class=""
                name="add"
            />
        </div>
        </q-item>
        </router-link>
        
        <InviteUserPopUp  v-model="_togglePopUp" :group_id="page.object.id" />
    <q-item-section 
        v-if="(isChildrens) && showChildrens">
        <!-- <SubjectList v-if="isSubjects" :subjects="subjects.get_group.subject" /> -->
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
import InviteUserPopUp from "./InviteUserPopUp.vue";

const { page } = defineProps({
    page: Object,
});

const { result: subjects } = useQuery(getGroupSubjects, {
    group_id: page?.object?.id,
});


const _isGroupPage = computed(() => page.object.type_id === import.meta.env.VITE_GROUP_TYPE_ID)

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

const _togglePopUp = ref(false)
function inviteUser() {
    _togglePopUp.value = !_togglePopUp.value
}  
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