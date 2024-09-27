<template>
  <q-list>
    <TreePagesItem
      v-for="page in pages"
      :key="page.id"
      :page="page"
    />
  </q-list>
</template>

<script setup>
import TreePagesItem from "./TreePagesItem.vue";

const { pages } = defineProps({
  pages: Array,
});

</script>



























<!-- <template>
    <q-list v-if="loading">
        
    </q-list>
    <q-list padding>        
        <q-expansion-item
            icon="people"
            label="Команда"
            expand-separator
            header-class="text-primary"
            to="/"
            exact
        >
            <q-list>
                <q-item to="/responsible" exact class="q-pl-xl" clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="person" />
                  </q-item-section>
                  <q-item-section>
                    Ответственные
                  </q-item-section>
                </q-item>
                <q-item to="/executors" exact class="q-pl-xl" clickable v-ripple>
                  <q-item-section avatar>
                    <q-icon name="person" />
                  </q-item-section>
                  <q-item-section>
                    Исполнители
                  </q-item-section>
              </q-item>
            </q-list>
        </q-expansion-item>
    </q-list>

    <div v-for="page in rootPages" :key="page.id">
        {{ page.title }}
    </div>
</template>


<script setup>
import { ref, onMounted, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PAGES } from 'src/graphql/queries/getPages';
import { GET_ROOT_PAGES } from 'src/graphql/queries/getRootPages';


const rootPages = ref([]);
const pages = ref([]);
const paginatorInfo = ref({});

const { data, load, err } = useQuery(GET_PAGES, {
    perPage: 10,
    page: 1
});

const { result , loading , error } = useQuery(GET_ROOT_PAGES);

watch(result, (newResult) => {
  if (newResult) {
    rootPages.value = newResult.rootPages.data;
    paginatorInfo.value = newResult.rootPages.paginatorInfo;
  }
});

console.log(rootPages);

</> -->

