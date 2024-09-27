<template>
    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 185px); margin-top: 185px; border-right: 1px solid #ddd">
          <TreePages 
            :pages="mySpacePages?.rootPages?.data"
          />
        </q-scroll-area>

        <q-img class="absolute-top image" style="height: 185px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div v-if="loading">Loading</div>
            <div v-else-if="error">Error</div>
            <div v-else-if="result && result.space">
              <div class="text-weight-bold">{{result.space.name}}</div>
              <div class="text-weight-bold">{{result.space.description}}</div>
            </div>
          </div>
        </q-img>
      </q-drawer>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable';
import { GET_SPACE } from 'src/graphql/queries/getSpace';
import TreePages from 'src/components/TreePages.vue';
import { pages } from '../graphql/queries/queries';

const { result, loading, error } = useQuery(GET_SPACE,
    { id: import.meta.env.VITE_SPACE},
    { context: { headers: { space: -1}}
}); 

const { result: mySpacePages } = useQuery(pages);
</script>