<template>
  <q-page>
    <div class="q-pa-md">
    <q-table
      :rows="rows"
      row-key="name"
      flat bordered
    />
  </div>
  </q-page>
</template>

<script setup>
defineOptions({
  name: 'Team'
});

const rows = [
  {
    ФИO: 'Frozen Yogurt',
    Email: 159,
    Задачи: 6.0,
    'Связь с группой': 24,
    'Модули': 4.0,
  },
  
]
</script>
