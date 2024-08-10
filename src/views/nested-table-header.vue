<script setup>
import NestedTableHeader from './nested-table-header.vue';
defineProps(['fields']);
</script>
<template>
  <el-table-column
    v-for="item in fields"
    :prop="item.prop"
    :label="item.label"
    align="center"
    :width="item.width"
    min-width="100"
  >
    <template v-if="item.children">
      <nested-table-header :fields="item.children"></nested-table-header>
    </template>
  </el-table-column>
</template>
<style></style>
